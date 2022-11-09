/**
 * @fileoverview Local stub for data visualisation input
 */

/// Raw response object
const data = [
  {
    day: "Monday",
    value: 7
  },
  {
    day: "Tuesday",
    value: 8
  },
  {
    day: "Wednesday",
    value: 1
  },
  {
    day: "Thursday",
    value: 14
  },
  {
    day: "Friday",
    value: 16
  },
  {
    day: "Saturday",
    value: 3
  },
  {
    day: "Sunday",
    value: 6
  }
];

const DEFAULT_DELAY = 0;

/// Async response method
const loadData = async (timeout = DEFAULT_DELAY) => {
  timeout > 0 && (await new Promise((res) => setTimeout(res, timeout)));
  return data;
};

export default data;
export { loadData };
