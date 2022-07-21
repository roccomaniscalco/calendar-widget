// convert calendar to Map for perf :P
function calendarToMap(calendar) {
  const calendarMap = new Map()
  Object.entries(calendar).forEach(([dayIso, day]) => {
    calendarMap.set(dayIso, day)
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
