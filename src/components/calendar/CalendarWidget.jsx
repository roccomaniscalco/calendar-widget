import { Card, Center, ScrollArea, Stack } from "@mantine/core"
import { useState } from "react"
import AgendaDay from "~/components/calendar/AgendaDay"
import DatePicker from "~/components/calendar/DatePicker"

const CalendarWidget = () => {
  const [activeDate, setActiveDate] = useState(new Date())

  const handleDateChange = (date) => {
    setActiveDate(date)
  }

  return (
    <Card withBorder p={0} radius="sm">
      <Stack spacing={0} sx={{ width: 300, height: 600 }}>
        <Center m="lg">
          <DatePicker
            activeDate={activeDate}
            handleDateChange={handleDateChange}
          />
        </Center>
        <ScrollArea type="hover" sx={{ flex: 1 }}>
          <AgendaDay activeDate={activeDate} />
        </ScrollArea>
      </Stack>
    </Card>
  )
}

export default CalendarWidget
