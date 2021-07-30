function calculate(str) {
  let arrStr = str.split(',');
  let start = arrStr[0];
  let end = arrStr[1];
  let arrStart = start.split(' ');
  let arrEnd = end.split(' ');
  arrEnd.splice(0, 1);
  console.log(arrStart, arrEnd);
  // validate the input data
  if (
    arrStart[2] > arrEnd[2] ||
    (arrStart[2] === arrEnd[2] && arrStart[1] > arrEnd[1]) ||
    (arrStart[2] === arrEnd[2] &&
      arrStart[1] === arrEnd[1] &&
      arrStart[0] > arrEnd[0])
  ) {
    throw Error('Please check your day.');
  }
  if (arrStart[2] < 1900 || arrEnd[2] > 2010) {
    throw Error('Please select your day between Year1900 and Year2010.');
  }
  // count the days
  let days = daysBetweenDates(arrStart, arrEnd);
  return `${str}, ${days}`;
}

const daysBetweenDates = (arrStart, arrEnd) => {
  const leapYears = (year, month) => {
    if (month <= 2) {
      --year;
    }
    return (
      Math.floor(year / 400) + Math.floor(year / 4) - Math.floor(year / 100)
    );
  };
  let monthDays = [0, 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  for (let i = 1; i < monthDays.length; ++i) {
    monthDays[i] += monthDays[i - 1];
  }
  let countDays = (day, month, year) => {
    return year * 365 + leapYears(year, month) + monthDays[month] + day;
  };
  let p = countDays(...arrStart.map(Number));
  let q = countDays(...arrEnd.map(Number));
  return q - p;
};

const result = calculate('01 02 2000, 01 03 2000');
// const result1 = calculate("01 01 1899, 01 02 2000");
// const result2 = calculate("01 01 1920, 01 02 2011");
// const result3 = calculate("01 01 2001, 01 01 2000");
console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);

module.exports = {
  calculate: calculate,
  daysBetweenDates: daysBetweenDates,
};
