function formatDateToString(inputDate) {
  let date = new Date(inputDate);

  // Check if the input is a valid date string
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export default formatDateToString;
