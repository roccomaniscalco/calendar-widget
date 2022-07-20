import { Card, createStyles, Indicator, Text } from "@mantine/core"
import { Month } from "@mantine/dates"
import { useState } from "react"
import useSWR from "swr"
import { calendarFormat } from "~/middleware/calendarFormat"
import { fetchCalendar } from "~/utils/calendar"

const useStyles = createStyles((theme) => ({
  activeDate: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.xl,
    marginBottom: theme.spacing.xl,
    textAlign: "center",
  },

  // override default styles
  outside: {
    opacity: 0,
  },
  weekend: {
    color: `${
      theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7]
    } !important`,
  },
  selected: {
    background: `${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    } !important`,
    color: `${
      theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7]
    } !important`,
  },
}))

const CalendarWidget = () => {
  const { classes, cx } = useStyles()
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
      <Text className={classes.activeDate}>{activeDate.toDateString()}</Text>
      <Month
        month={new Date()}
        value={activeDate}
        onChange={handleDateChange}
        disableOutsideEvents
        dayClassName={(_date, modifiers) =>
          cx({
            // order matters here
            [classes.outside]: modifiers.outside,
            [classes.weekend]: modifiers.weekend,
            [classes.selected]: modifiers.selected,
          })
        }
        renderDay={(date) => {
          return (
            <Indicator
              disabled={!calendar.has(date.toISOString())}
              color="red"
              size={5}
              offset={10}
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
