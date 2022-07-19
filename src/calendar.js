// return n number of random dates in the current month
function randomDatesInCurrentMonth(n) {
  const now = new Date()
  const dates = []
  for (let i = 0; i < n; i++) {
    const day = Math.floor(Math.random() * 28) + 1 // max of 28 days in a month to avoid overflow
    dates.push(new Date(now.getFullYear(), now.getMonth(), day))
  }
  return dates
}

// return n number of random times in the given date
function randomTimesInDate(date, n) {
  const times = []
  for (let i = 0; i < n; i++) {
    const hour = Math.floor(Math.random() * 24)
    const minute = Math.floor(Math.random() * 60)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    times.push(new Date(year, month, day, hour, minute))
  }
  return times
}

// return a random task string
function randomTask() {
  const tasks = [
    "walk the dog",
    "clean the house",
    "cook dinner",
    "buy groceries",
    "go to the gym",
    "take a nap",
    "go to the movies",
    "go to the beach",
    "go to the library",
    "train jiujitsu",
    "drive to work",
    "go to the gym",
    "write a blog post",
    "see the doctor",
  ]
  return tasks[Math.floor(Math.random() * tasks.length)]
}

// return calendar object with n number of random days
// each day has a random number of events
// an event is a random task and a random time
function randomCalendar(n) {
  const calendar = {}
  const dates = randomDatesInCurrentMonth(n)
  dates.forEach((date) => {
    const isoDate = date.toISOString()
    const numberOfEvents = Math.floor(Math.random() * 5) + 1
    const times = randomTimesInDate(date, numberOfEvents)
    calendar[isoDate] = {}
    times.forEach((time) => {
      calendar[isoDate][time] = randomTask()
    })
  })
  return calendar
}

// mock data fetching from the server
export function fetchCalendar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomCalendar(10))
    }, 1000)
  })
}