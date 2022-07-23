import { Box, createStyles, Stack, Text } from "@mantine/core"
import { arrayOf, instanceOf, oneOf, shape, string } from "prop-types"
import AgendaEvent from "~/components/calendar/AgendaEvent"
import { priority } from "~/constants/priority"

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

const AgendaDay = ({ date, events }) => {
  const { classes } = useStyles()

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
          {formatDate(date)}
        </Text>
      </Box>
      <Stack spacing="xs" pb="md">
        {events.length > 0 ? (
          events.map((event, idx) => (
            <AgendaEvent
              name={event.name}
              start={event.start}
              end={event.end}
              priority={event.priority}
              key={idx}
            />
          ))
        ) : (
          <Text size="sm" color="dimmed" weight={600}>
            No events for the day
          </Text>
        )}
      </Stack>
    </Box>
  )
}

AgendaDay.propTypes = {
  date: instanceOf(Date).isRequired,
  events: arrayOf(
    shape({
      name: string.isRequired,
      start: string.isRequired,
      end: string.isRequired,
      priority: oneOf(Object.values(priority)),
    })
  ),
}

export default AgendaDay
