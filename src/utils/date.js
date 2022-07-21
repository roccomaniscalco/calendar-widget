// get duration from dateA to DateB ex. '1d 2hr 3min'
export const getDuration = (dateA, dateB) => {
  const ms = dateB.getTime() - dateA.getTime()
  const days = Math.floor(ms / (1000 * 60 * 60 * 24))
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
  const str = []
  if (days) str.push(`${days}d`)
  if (hours) str.push(`${hours}hr`)
  if (minutes) str.push(`${minutes}min`)
  return str.join(" ")
}

// ex. '3:05 PM'
export const formatTime = (date) =>
  date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  })

// ex. 'Friday, Jul 22'
export const formatDate = (date) =>
  date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  })
