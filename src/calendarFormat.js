function convertISOtoDate(isoDate) {
  return new Date(isoDate)
}

//
function convertCalendarToMap(calendar) {
  const calendarMap = new Map()
  for (const isoDate in calendar) {
    const eventsMap = new Map()
    const isoTimes = calendar[isoDate]
    for (const isoTime in isoTimes) {
      const task = isoTimes[isoTime]
      const time = convertISOtoDate(isoDate)
      eventsMap.set(time, task)
    }
    const date = convertISOtoDate(isoDate)
    calendarMap.set(date, eventsMap)
  }
  return calendarMap
}

export function calendarFormat(useSWRNext) {
  return (key, fetcher, config) => {
    const swr = useSWRNext(key, fetcher, config)
    if (swr.data && !swr.error)
      return { ...swr, data: convertCalendarToMap(swr.data) }
    return swr
  }
}
