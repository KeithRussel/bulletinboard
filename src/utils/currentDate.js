export const currentDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const current_date = `${year}-${month}-${day}`;

  return current_date;
};
