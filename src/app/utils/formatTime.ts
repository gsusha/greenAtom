export function formatDate(date: string) {
  return date.substring(2).split('-').reverse().join('.');
}
