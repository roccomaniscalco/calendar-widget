import { Card, Center, ScrollArea, Stack } from "@mantine/core"
import { useState } from "react"
import useSWR from "swr"
import AgendaCalendar from "~/components/AgendaCalendar"
import AgendaTimeline from "~/components/AgendaTimeline"
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
    <Card withBorder p={0} radius="sm">
      <Stack spacing={0} sx={{ width: 300, height: 900 }}>
        <Center m="lg">
          <AgendaCalendar
            calendar={calendar}
            activeDate={activeDate}
            handleDateChange={handleDateChange}
          />
        </Center>
        <ScrollArea sx={{ flex: 1 }} type="hover">
          <AgendaTimeline />
        </ScrollArea>
      </Stack>
    </Card>
  )
}

export default AgendaWidget
