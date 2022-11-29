export function formatDate(date: string) {
  console.log(date);
  return date ? date.substring(2).split('-').reverse().join('.') : '';
}
