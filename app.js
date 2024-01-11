let giveaway = document.querySelector(".giveaway");

let dayBox = document.querySelector(".day-box h3");
let minBox = document.querySelector(".min-box h3");
let secBox = document.querySelector(".sec-box h3");
let hourBox = document.querySelector(".hour-box h3");

let end = new Date(2024, 0, 12, 7, 30);

let h1 = document.querySelector(".days")
let h2 = document.querySelector(".hours")
let h3 = document.querySelector(".mins")
let h4 = document.querySelector(".secs")

let dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let monthName = [
  "January",
  "Fabruary",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let timer = () => {
  let endYear = end.getFullYear();
  let endDate = end.getDate();
  let hours = end.getHours();
  let minutes = end.getMinutes();
  let endDay = dayName[end.getDay()];
  let endMonth = monthName[end.getMonth()];

  giveaway.textContent = `giveaway ends on ${endDay}, ${endDate}, ${endMonth}, ${endYear},${hours}`;

  let now = new Date();
  let nowMs = now.getTime();
  let endMs = end.getTime();
  let diff = endMs - nowMs;

  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMinute = 60 * 1000;

  let days = Math.floor(diff / oneDay);
  let hour = Math.floor((diff % oneDay) / oneHour);
  let mins = Math.floor((diff % oneHour) / oneMinute);
  let secs = Math.floor((diff % oneMinute) / 1000);

  h1.textContent = days;
  h2.textContent = hour;
  h3.textContent = mins;
  h4.textContent = secs;
};

timer();

setInterval(timer, 1000);
