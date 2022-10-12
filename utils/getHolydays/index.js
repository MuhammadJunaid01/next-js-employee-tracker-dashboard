import Holidays from "date-holidays";

/**
 * The function useHolyDays takes an input and returns an array of two elements, the first element is
 * an array of countries and the second element is an array of holidays.
 * @param input - {
 * @returns An array of two elements. The first element is an array of countries. The second element is
 * an array of holidays.
 */
const useHolyDays = (input) => {
  const hd = new Holidays();
  const g = hd.init(input);
  const contrys = hd.getCountries();
  const holydays = hd.getHolidays(2022);
  return [contrys, holydays];
};

export default useHolyDays;
