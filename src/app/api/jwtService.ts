import axios from 'axios';
import { apiConfig } from '../../config';

class EventEmitter {
  constructor() {
    // @ts-ignore
    this.events = {};
  }

  // @ts-ignore
  _getEventListByName(eventName) {
    // @ts-ignore
    if (typeof this.events[eventName] === 'undefined') {
      // @ts-ignore
      this.events[eventName] = new Set();
    }
    // @ts-ignore
    return this.events[eventName];
  }

  // @ts-ignore
  on(eventName, fn) {
    this._getEventListByName(eventName).add(fn);
  }

  // @ts-ignore
  set(eventName, fn) {
    // @ts-ignore
    this.events[eventName] = new Set([fn]);
  }

  // @ts-ignore
  once(eventName, fn) {
    const self = this;

    // @ts-ignore
    const onceFn = (...args) => {
      self.removeListener(eventName, onceFn);
      fn.apply(self, args);
    };
    this.on(eventName, onceFn);
  }

  // @ts-ignore
  emit(eventName, ...args) {
    this._getEventListByName(eventName).forEach(
      // eslint-disable-next-line func-names
      // @ts-ignore
      function (fn) {
        // @ts-ignore
        fn.apply(this, args);
      }.bind(this)
    );
  }

  // @ts-ignore
  removeListener(eventName, fn) {
    this._getEventListByName(eventName).delete(fn);
  }
}

class JwtService extends EventEmitter {
  private static instance: JwtService;

  private constructor() {
    super();
    this.axios = axios.create();
    this.axios.defaults.baseURL = apiConfig.apiUrl;
    this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    this.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  public axios;

  public static getInstance(): JwtService {
    if (!JwtService.instance) {
      JwtService.instance = new JwtService();
      JwtService.instance.setInterceptors();
    }

    return JwtService.instance;
  }

  init() {
    this.setInterceptors();
  }

  setInterceptors = () => {
    this.axios.interceptors.response.use(
      (response) => {
        if (response.data?.errors?.length) {
          const error = response.data.errors[0];
          const extensions = error?.extensions;

          throw extensions.validation || error.message || error.debugMessage;
        }
        return response;
      },
      (err) => {
        return new Promise(() => {
          if (err == 401) {
            throw err;
          }
          throw err;
        });
      }
    );
  };
}

const jwtServiceInstance = JwtService.getInstance();

export default jwtServiceInstance;
