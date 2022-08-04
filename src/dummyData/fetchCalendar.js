import { priority } from "~/constants/priority"

// return a random number between min and max integers
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// return a random Date between min and max
const getRandomDate = (min, max) => {
  return new Date(getRandomNumber(min.getTime(), max.getTime()))
}

const getStartOfDay = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

const getEndOfDay = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59)
}

// return a random calendar object for the current year
const getRandomCalendar = () => {
  const NUM_OF_DAYS = 200
  const MAX_NUM_OF_EVENTS_PER_DAY = 5
  const START = new Date(`${new Date().getFullYear()}-01-01`)
  const END = new Date(`${new Date().getFullYear()}-12-31`)
  const EVENT_NAMES = ["Go to the gym", "Study", "Go to the movies", "Code :D"]
  const EVENT_PRIORITY = Object.values(priority)

  // fill days with random dates with time set to 00:00:00
  const days = []
  while (days.length < NUM_OF_DAYS) {
    const date = getStartOfDay(getRandomDate(START, END))
    if (!days.includes(date)) days.push(date)
  }

  // fill calendar with random events for each day
  const calendar = {}
  days.forEach((day) => {
    const numOfEvents = getRandomNumber(0, MAX_NUM_OF_EVENTS_PER_DAY)
    const events = []

    while (events.length < numOfEvents) {
      const start = getRandomDate(new Date(day), getEndOfDay(day))
      events.push({
        name: EVENT_NAMES[getRandomNumber(0, EVENT_NAMES.length - 1)],
        priority: EVENT_PRIORITY[getRandomNumber(0, EVENT_PRIORITY.length - 1)],
        start: start.toISOString(),
        end: getRandomDate(start, getEndOfDay(day)).toISOString(),
      })
    }

    calendar[day.toISOString()] = { events }
  })

  return calendar
}

export function fetchCalendar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getRandomCalendar())
    }, 2000)
  })
}
