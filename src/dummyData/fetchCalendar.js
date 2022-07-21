import calendar from "~/dummyData/calendar.json"

export function fetchCalendar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(calendar)
    }, 2000)
  })
}
