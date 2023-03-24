const getPetAge = dateString => {
  const today = new Date();
  const [day, month, year] = dateString.split('.');
  const inputDate = new Date(`${year}-${month}-${day}`);

  const diffTime = Math.abs(today - inputDate);
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
  const diffMonths = diffYears * 12;

  if (diffYears >= 1) {
    return `${Math.floor(diffYears)} year${
      Math.floor(diffYears) > 1 ? 's' : ''
    }`;
  } else {
    return `${Math.floor(diffMonths)} month${
      Math.floor(diffMonths) > 1 ? 's' : ''
    }`;
  }
};

export default getPetAge;
