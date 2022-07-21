import { Card, Center, ScrollArea, Stack } from "@mantine/core"
import { Suspense, useState } from "react"
import { AlertTriangle } from "tabler-icons-react"
import AgendaDay from "~/components/calendar/AgendaDay"
import DatePicker from "~/components/calendar/DatePicker"
import DatePickerSkeleton from "~/components/calendar/DatePickerSkeleton"
import ErrorBoundary from "~/components/ErrorBoundary"

const CalendarWidget = () => {
  const [activeDate, setActiveDate] = useState(new Date())

  const handleDateChange = (date) => {
    setActiveDate(date)
  }

  return (
    <Card withBorder p={0} radius="sm" sx={{ height: "100%", width: 300 }}>
      <Stack spacing={0}>
        <ErrorBoundary fallback={<AlertTriangle size={48} />}>
          <Center m="lg">
            <Suspense fallback={<DatePickerSkeleton />}>
              <DatePicker
                activeDate={activeDate}
                handleDateChange={handleDateChange}
              />
            </Suspense>
          </Center>
          <ScrollArea type="hover" sx={{ flex: 1 }}>
            <Suspense>
              <AgendaDay activeDate={activeDate} />
            </Suspense>
          </ScrollArea>
        </ErrorBoundary>
      </Stack>
    </Card>
  )
}

export default CalendarWidget
