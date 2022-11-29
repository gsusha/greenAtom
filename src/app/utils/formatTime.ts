export function formatDate(date: string) {
  // TODO: тут было undefined, надо пересмотреть
  return date ? date.substring(2).split('-').reverse().join('.') : '';
}
