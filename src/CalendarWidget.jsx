import { Month } from "@mantine/dates"

const CalendarWidget = () => {
  return <Month month={new Date()} firstDayOfWeek="sunday" size="sm" />
}

export default CalendarWidget
