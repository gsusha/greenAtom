import JwtService from './jwtService';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function apiMakeRequest<T>(
  operationName: string,
  query: { id: string },
  // eslint-disable-next-line @typescript-eslint/ban-types
  variables?: Object
): Promise<T> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return JwtService.axios
    .post('', { operationName, query, variables })
    .then((response) => (operationName ? response.data.data?.[operationName] : response.data.data) || null);
}
