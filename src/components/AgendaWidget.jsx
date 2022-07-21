import { Card, Center, ScrollArea, Stack } from "@mantine/core"
import { useState } from "react"
import AgendaCalendar from "~/components/AgendaCalendar"
import AgendaTimeline from "~/components/AgendaList"

const AgendaWidget = () => {
  const [activeDate, setActiveDate] = useState(new Date())

  const handleDateChange = (date) => {
    setActiveDate(date)
  }

  return (
    <Card withBorder p={0} radius="sm">
      <Stack spacing={0} sx={{ width: 300, height: 600 }}>
        <Center m="lg">
          <AgendaCalendar
            activeDate={activeDate}
            handleDateChange={handleDateChange}
          />
        </Center>
        <ScrollArea type="hover" sx={{ flex: 1 }}>
          <AgendaTimeline activeDate={activeDate} />
        </ScrollArea>
      </Stack>
    </Card>
  )
}

export default AgendaWidget
