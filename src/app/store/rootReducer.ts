import pageReducers from '../pages/pageRedusers';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const createReducer = () => (state, action) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const combinedReducer = pageReducers;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return combinedReducer(state, action as never);
};

export default createReducer;
