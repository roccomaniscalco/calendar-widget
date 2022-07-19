import { Card, Indicator } from "@mantine/core"
import { Month } from "@mantine/dates"
import useSWR from "swr"
import { fetchCalendar } from "~/utils/calendar"
import { calendarFormat } from "~/middleware/calendarFormat"

const CalendarWidget = () => {
  const { data: calendar } = useSWR("/api/calendar", fetchCalendar, {
    use: [calendarFormat],
    suspense: true,
  })

  return (
    <Card withBorder p="xl" radius="xl">
      <Month
        month={new Date()}
        firstDayOfWeek="sunday"
        size="lg"
        renderDay={(date) => {
          return (
            <Indicator
              size={7}
              color="red"
              offset={14}
              disabled={!calendar.has(date.toISOString())}
            >
              {date.getDate()}
            </Indicator>
          )
        }}
      />
    </Card>
  )
}

export default CalendarWidget
