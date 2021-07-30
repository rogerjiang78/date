const app = require('./demo');

it("input '01 02 2000' and '01 03 2000' will output 29", () => {
  let str1 = ['01', '02', '2000'];
  let str2 = ['01', '03', '2000'];
  expect(app.daysBetweenDates(str1, str2)).toBe(29);
});

it("input '01 02 2000, 01 03 2000', and output should be '01 02 2000, 01 03 2000, 29'", () => {
  let str = '01 02 2000, 01 03 2000';
  expect(app.calculate(str)).toBe('01 02 2000, 01 03 2000, 29');
})
