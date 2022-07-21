import { Card, Center, ScrollArea, Stack } from "@mantine/core"
import { useState } from "react"
import AgendaCalendar from "~/components/AgendaCalendar"
import AgendaTimeline from "~/components/AgendaTimeline"

const AgendaWidget = () => {
  const [activeDate, setActiveDate] = useState(new Date())

  const handleDateChange = (date) => {
    setActiveDate(date)
  }

  return (
    <Card withBorder p={0} radius="sm">
      <Stack spacing={0} sx={{ width: 300, height: 900 }}>
        <Center m="lg">
          <AgendaCalendar
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
