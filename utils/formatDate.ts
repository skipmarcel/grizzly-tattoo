export function formatDate(inputDate: string) {
  const date = new Date(inputDate);

  const monthIndex = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedMonth = new Intl.DateTimeFormat("en", { month: "long" })
    ?.format(date)
    ?.toUpperCase();

  return `${formattedMonth} ${day}, ${year}`;
}

export function youtubeFormatDate(inputDate: string) {
  const date = new Date(inputDate);

  const monthIndex = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedMonth = new Intl.DateTimeFormat("en", {
    month: "long",
  })?.format(date);

  return `${formattedMonth} ${day}, ${year}`;
}

export function formatDateWithDayName(inputDate: string) {
  const date = new Date(inputDate);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(inputDate);
  var dayName = days[d.getDay()];

  const monthIndex = date.getMonth();
  const day = date.getDate().toString().padStart(2, "0");

  return {
    dayName: `${dayName}`,
    monthName: `${months[monthIndex]}`,
    dayNumber: `${day}`,
  };
}
