import { Card } from "@mantine/core"
import { useState } from "react"
import useSWR from "swr"
import CalendarMonth from "~/components/CalendarMonth"
import { calendarFormat } from "~/middleware/calendarFormat"
import { fetchCalendar } from "~/utils/calendar"

const CalendarWidget = () => {
  const [activeDate, setActiveDate] = useState(new Date())
  const { data: calendar } = useSWR("/api/calendar", fetchCalendar, {
    use: [calendarFormat],
    suspense: true,
  })

  const handleDateChange = (date) => {
    setActiveDate(date)
  }

  return (
    <Card withBorder p="xl" radius="sm">
      <CalendarMonth
        calendar={calendar}
        activeDate={activeDate}
        handleDateChange={handleDateChange}
      />
    </Card>
  )
}

export default CalendarWidget
