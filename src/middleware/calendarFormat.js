import { priority } from "~/constants/priority"

const getHighestPriority = (events) => {
  const uniquePriorities = new Set(events.map((event) => event.priority))
  if (uniquePriorities.has(priority.HIGH)) return priority.HIGH
  if (uniquePriorities.has(priority.MEDIUM)) return priority.MEDIUM
  if (uniquePriorities.has(priority.LOW)) return priority.LOW
  return undefined
}

// convert calendar to Map for perf :P
function calendarToMap(calendar) {
  const calendarMap = new Map()
  Object.entries(calendar).forEach(([dayIso, day]) => {
    calendarMap.set(dayIso, {
      priority: getHighestPriority(day.events),
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
