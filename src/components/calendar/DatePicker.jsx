import { createStyles, Indicator } from "@mantine/core"
import { Calendar } from "@mantine/dates"
import { func, instanceOf } from "prop-types"
import useSWR from "swr"
import { fetchCalendar } from "~/dummyData/fetchCalendar"
import { calendarAsMap } from "~/middleware/calendarFormat"

const useStyles = createStyles((theme) => ({
  high: {
    backgroundColor: theme.colors.red[7],
  },
  medium: {
    backgroundColor: theme.colors.yellow[7],
  },
  low: {
    backgroundColor: theme.colors.green[7],
  },
  none: {
    backgroundColor: theme.colors.gray[5],
  },

  // important!s are needed to override default styles
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
  current: {
    borderRadius: `${theme.radius.sm} !important`,
    backgroundColor: `${theme.colors.blue[7]} !important`,
    color: `${theme.white} !important`,
  },
}))

const DatePicker = ({ activeDate, handleDateChange }) => {
  const { classes, cx } = useStyles()
  const { data: calendar } = useSWR("/api/calendar", fetchCalendar, {
    use: [calendarAsMap],
    suspense: true,
  })

  const isCurrentDate = (date) => {
    const currentDate = new Date()
    return (
      date.getFullYear() === currentDate.getFullYear() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getDate() === currentDate.getDate()
    )
  }

  return (
    <Calendar
      value={activeDate}
      onChange={handleDateChange}
      disableOutsideEvents
      allowLevelChange={false}
      dayClassName={(date, modifiers) =>
        cx({
          // order matters here
          [classes.outside]: modifiers.outside,
          [classes.weekend]: modifiers.weekend,
          [classes.selected]: modifiers.selected,
          [classes.current]: isCurrentDate(date),
        })
      }
      renderDay={(date) => (
        <Indicator
          disabled={!calendar.has(date.toISOString())}
          classNames={{
            indicator:
              classes[calendar.get(date.toISOString())?.priority || "none"],
          }}
          size={6}
          offset={10}
        >
          {date.getDate()}
        </Indicator>
      )}
    />
  )
}

DatePicker.propTypes = {
  activeDate: instanceOf(Date).isRequired,
  handleDateChange: func.isRequired,
}

export default DatePicker
