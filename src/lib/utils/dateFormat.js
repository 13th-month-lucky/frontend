export function formatDateWithDayOfWeek(date) {
  let day = ["일", "월", "화", "수", "목", "금", "토"];

  let dateFormat1 =
    date.getFullYear() +
    ". " +
    (date.getMonth() < 9 ? "0" : "") +
    +(date.getMonth() + 1) +
    ". " +
    date.getDate() +
    " (" +
    day[date.getDay()] +
    ") " +
    date.getHours() +
    ":" +
    date.getMinutes();

  return dateFormat1;
}

export function formatDateTime(date) {
  date = new Date(date);
  let dateFormat1 =
    date.getFullYear() +
    "." +
    (date.getMonth() < 9 ? "0" : "") +
    +(date.getMonth() + 1) +
    "." +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();

  return dateFormat1;
}

export function formatDateTimeArray(date) {
  date = new Date(date);
  let dateFormat1 = [
    date.getFullYear() +
      "." +
      (date.getMonth() < 9 ? "0" : "") +
      +(date.getMonth() + 1) +
      "." +
      date.getDate(),
    date.getHours() + ":" + date.getMinutes(),
  ];
  return dateFormat1;
}
