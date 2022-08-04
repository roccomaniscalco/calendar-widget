import { Center, Paper, ScrollArea, Stack } from "@mantine/core"
import { Suspense, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { AlertTriangle } from "tabler-icons-react"
import Agenda from "~/components/calendar/Agenda"
import AgendaSkeleton from "~/components/calendar/AgendaSkeleton"
import DatePicker from "~/components/calendar/DatePicker"
import DatePickerSkeleton from "~/components/calendar/DatePickerSkeleton"
import ErrorBoundary from "~/components/ErrorBoundary"

const CalendarWidget = () => {
  const [activeDate, setActiveDate] = useState(new Date())
  const scrollAreaRef = useRef()

  const handleDateChange = (date) => {
    flushSync(() => setActiveDate(date))
    scrollAreaRef.current.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Paper withBorder p={0} sx={{ height: "100%", minWidth: "min-content" }}>
      <Stack spacing={0} sx={{ height: "100%" }}>
        <ErrorBoundary fallback={<AlertTriangle size={48} />}>
          <Center my="md" mx="md">
            <Suspense fallback={<DatePickerSkeleton />}>
              <DatePicker
                activeDate={activeDate}
                handleDateChange={handleDateChange}
              />
            </Suspense>
          </Center>
          <ScrollArea viewportRef={scrollAreaRef} type="hover" sx={{ flex: 1 }}>
            <Suspense fallback={<AgendaSkeleton />}>
              <Agenda activeDate={activeDate} />
            </Suspense>
          </ScrollArea>
        </ErrorBoundary>
      </Stack>
    </Paper>
  )
}

export default CalendarWidget
