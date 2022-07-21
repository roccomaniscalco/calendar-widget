import { Box, createStyles, Stack, Text } from "@mantine/core"
import { instanceOf } from "prop-types"
import useSWR from "swr"
import AgendaEvent from "~/components/calendar/AgendaEvent"
import { fetchCalendar } from "~/dummyData/fetchCalendar"
import { calendarAsMap } from "~/middleware/calendarFormat"

const useStyles = createStyles((theme) => ({
  stickyHeader: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    paddingBlock: theme.spacing.xs,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    borderTop:
      theme.colorScheme === "dark"
        ? `1px solid ${theme.colors.dark[6]}`
        : `1px solid ${theme.colors.gray[2]}`,
  },
}))

const AgendaDay = ({ activeDate }) => {
  const { classes } = useStyles()
  const { data: calendar } = useSWR("/api/calendar", fetchCalendar, {
    use: [calendarAsMap],
    suspense: true,
  })
  const events = calendar.get(activeDate.toISOString())?.events || []

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })

  return (
    <Box mx="md">
      <Box className={classes.stickyHeader}>
        <Text color="dimmed" size="sm">
          {formatDate(activeDate)}
        </Text>
      </Box>
      <Stack spacing="xs" pb="md">
        {events.length > 0 ? (
          events.map((event, idx) => (
            <AgendaEvent
              name={event.name}
              start={new Date(event.start)}
              end={new Date(event.end)}
              risk={event.risk}
              key={idx}
            />
          ))
        ) : (
          <Text size="sm" weight={600}>
            No events for the day
          </Text>
        )}
      </Stack>
    </Box>
  )
}

AgendaDay.propTypes = {
  activeDate: instanceOf(Date).isRequired,
}

export default AgendaDay
