export function formatDate(date: Date, format: string = 'MM/DD/YYYY'): string {
  return new Intl.DateTimeFormat('en-US').format(date);
}
