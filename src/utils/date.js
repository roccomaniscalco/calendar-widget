// return the difference of dateA and dateB milliseconds
export function dateDiff(dateA, dateB) {
  return dateA.getTime() - dateB.getTime() 
}

// format milliseconds to a string
// return a string like '1d 2hr 3min'
export function formatMilliseconds(ms) {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24))
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
  const str = []
  if (days) str.push(`${days}d`)
  if (hours) str.push(`${hours}hr`)
  if (minutes) str.push(`${minutes}min`)
  return str.join(" ")
}
