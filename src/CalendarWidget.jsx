import { Month } from "@mantine/dates"
import useSWR from "swr"
import { fetchCalendar } from "~/calendar"
import { calendarFormat } from "~/calendarFormat"

const CalendarWidget = () => {
  const { data: calendar } = useSWR("/api/calendar", fetchCalendar, {
    use: [calendarFormat],
  })

  console.log(calendar)

  return <Month month={new Date()} firstDayOfWeek="sunday" size="sm" />
}

export default CalendarWidget
