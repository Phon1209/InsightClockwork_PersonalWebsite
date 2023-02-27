const humanizeDuration = require("humanize-duration");

/**
 * @param startDate
 * @param endDate
 * @return format string in form of start-end (duration)
 */
export const convertDate: (startDate: string, endDate: string) => string = (
  startDate,
  endDate
) => {
  const start: Date = new Date(startDate);
  let end: Date;
  let time: number;
  if (endDate === "Present") {
    end = new Date();
    time = end.getTime() - start.getTime();
  } else {
    end = new Date(endDate);
    time = end.getTime() - start.getTime() + 2592000000;
  }

  // Add 1 more month
  return `${startDate} - ${endDate} (${monthDuration(time)})`;
};

/**
 * @param time milli second time to convert
 * @return duration of time in the closest form
 */
const monthDuration: (time: number) => string = (time) => {
  return humanizeDuration(time, {
    language: "en",
    round: true,
    units: ["y", "mo"],
  });
};

/**
 *
 * @param x first comparator date
 * @param y second comparator date
 * @param invert boolean indicator of ascending(false) or descending(true)
 * @returns value for sorting
 */
export const sortDate: (x: Date, y: Date, invert?: boolean) => number = (
  x,
  y,
  invert = false
) => {
  return (x.getTime() - y.getTime()) * (invert ? -1 : 1);
};
