export const diffInDays = (date1, date2) => {
  if (!date1 || !date2) return 0;

  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diff = Math.abs(d2 - d1);
  return diff / (1000 * 60 * 60 * 24);
};