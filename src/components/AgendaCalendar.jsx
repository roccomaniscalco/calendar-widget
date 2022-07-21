import { createStyles, Indicator } from "@mantine/core"
import { Calendar } from "@mantine/dates"
import { func, instanceOf } from "prop-types"
import useSWR from "swr"
import { fetchCalendar } from "~/dummyData/fetchCalendar"
import { calendarAsMap } from "~/middleware/calendarFormat"

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
  high: {
    backgroundColor: theme.colors.red[5],
  },
  medium: {
    backgroundColor: theme.colors.yellow[5],
  },
  low: {
    backgroundColor: theme.colors.green[5],
  },
  none: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
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

const AgendaCalendar = ({ activeDate, handleDateChange }) => {
  const { classes, cx } = useStyles()
  const { data: calendar } = useSWR("/api/calendar", fetchCalendar, {
    use: [calendarAsMap],
    suspense: true,
  })

  return (
    <Calendar
      value={activeDate}
      onChange={handleDateChange}
      disableOutsideEvents
      allowLevelChange={false}
      dayClassName={(_date, modifiers) =>
        cx({
          // order matters here
          [classes.outside]: modifiers.outside,
          [classes.weekend]: modifiers.weekend,
          [classes.selected]: modifiers.selected,
        })
      }
      renderDay={(date) => (
        <Indicator
          disabled={!calendar.has(date.toISOString())}
          classNames={{
            indicator:
              classes[calendar.get(date.toISOString())?.risk || "none"],
          }}
          size={5}
          offset={10}
        >
          {date.getDate()}
        </Indicator>
      )}
    />
  )
}

AgendaCalendar.propTypes = {
  activeDate: instanceOf(Date).isRequired,
  handleDateChange: func.isRequired,
}

export default AgendaCalendar
