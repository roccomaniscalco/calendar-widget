import { priority } from "~/constants/priority"

const getHighestPriority = (events) => {
  const uniquePriorities = new Set(events.map((event) => event.priority))
  if (uniquePriorities.has(priority.HIGH)) return priority.HIGH
  if (uniquePriorities.has(priority.MEDIUM)) return priority.MEDIUM
  if (uniquePriorities.has(priority.LOW)) return priority.LOW
  return undefined
}

const sortEvents = (events) => {
  events.sort((a, b) => {
    if (a.start < b.start) return -1
    if (a.start > b.start) return 1
    return 0
  })
}

// convert calendar to Map for perf :P
function calendarToMap(calendar) {
  const calendarMap = new Map()
  Object.entries(calendar).forEach(([dayIso, day]) => {
    calendarMap.set(dayIso, {
      priority: getHighestPriority(day.events),
      events: sortEvents(day.events),
      ...day,
    })
  })
  return calendarMap
}

export function calendarAsMap(useSWRNext) {
  return (key, fetcher, config) => {
    const swr = useSWRNext(key, fetcher, config)
    if (swr.data && !swr.error) return { ...swr, data: calendarToMap(swr.data) }
    return swr
  }
}
