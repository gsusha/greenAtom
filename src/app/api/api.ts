import JwtService from './jwtService';

interface IQuery {
  key: string;
  id: string;
}

function getData<T>(path: string, query?: IQuery): Promise<T> {
  const queryString = query == null ? '' : `?${query.key}=${query.id}`;
  return JwtService.axios.get(`${path + queryString}`);
}

// eslint-disable-next-line @typescript-eslint/ban-types
function postData<T>(path: string, json: Object, query?: IQuery): Promise<T> {
  const queryString = query == null ? '' : `?${query.key}=${query.id}`;
  return JwtService.axios.post(`${path + queryString}`, json);
}

export default {
  getData,
  postData,
};
