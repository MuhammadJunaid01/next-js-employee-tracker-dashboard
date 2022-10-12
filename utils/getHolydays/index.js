import Holidays from "date-holidays";
const useHolyDays = () => {
  const hd = new Holidays();
  const g = hd.init("BD");
  const contrys = hd.getCountries();
  const holydays = hd.getHolidays(2022);
  return [contrys, holydays];
};

export default useHolyDays;
