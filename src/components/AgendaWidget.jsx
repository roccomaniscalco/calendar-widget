import { Card } from "@mantine/core"
import { useState } from "react"
import useSWR from "swr"
import AgendaCalendar from "~/components/AgendaCalendar"
import { calendarFormat } from "~/middleware/calendarFormat"
import { fetchCalendar } from "~/utils/calendar"

const AgendaWidget = () => {
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
      <AgendaCalendar
        calendar={calendar}
        activeDate={activeDate}
        handleDateChange={handleDateChange}
      />
    </Card>
  )
}

export default AgendaWidget
