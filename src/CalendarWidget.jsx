import { useMantineTheme } from "@mantine/core"
import { Month } from "@mantine/dates"
import useSWR from "swr"
import { fetchCalendar } from "~/calendar"
import { calendarFormat } from "~/calendarFormat"

const CalendarWidget = () => {
  const theme = useMantineTheme()
  const { data: calendar } = useSWR("/api/calendar", fetchCalendar, {
    use: [calendarFormat],
  })

  return (
    <Month
      month={new Date()}
      firstDayOfWeek="sunday"
      size="sm"
      dayStyle={(date) =>
        calendar.has(date.toISOString())
          ? { backgroundColor: theme.colors.red[9], color: theme.white }
          : null
      }
    />
  )
}

export default CalendarWidget
