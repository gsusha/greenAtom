export function formatDate(date: string) {
  return date ? date.substring(2).split('-').reverse().join('.') : '';
}
