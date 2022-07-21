import { Box, createStyles, Group, Text, Timeline } from "@mantine/core"
import { instanceOf } from "prop-types"
import useSWR from "swr"
import { fetchCalendar } from "~/dummyData/fetchCalendar"
import { calendarAsMap } from "~/middleware/calendarFormat"
import { formatDate, formatTime, getDuration } from "~/utils/date"

const getRiskColor = (risk) => {
  if (risk === "low") return "green"
  if (risk === "medium") return "yellow"
  if (risk === "high") return "red"
  return undefined
}

const useStyles = createStyles((theme) => ({
  stickyHeader: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    paddingBlock: theme.spacing.xs,
    borderTop:
      theme.colorScheme === "dark"
        ? `1px solid ${theme.colors.dark[6]}`
        : `1px solid ${theme.colors.gray[2]}`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
  timeline: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  itemBullet: {
    ":not(.mantine-Timeline-itemBulletWithChild)": {
      background:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },
  },
}))

const AgendaTimeline = ({ activeDate }) => {
  const { classes } = useStyles()
  const { data: calendar } = useSWR("/api/calendar", fetchCalendar, {
    use: [calendarAsMap],
    suspense: true,
  })
  const events = calendar.get(activeDate.toISOString())?.events || []

  return (
    <>
      <Box mx="lg">
        <Box className={classes.stickyHeader}>
          <Text size="sm" color="dimmed">
            {formatDate(activeDate)}
          </Text>
        </Box>
        {events.length > 0 ? (
          <Timeline
            bulletSize={16}
            lineWidth={3}
            className={classes.timeline}
            classNames={{ itemBullet: classes.itemBullet }}
          >
            {events.map((event, idx) => (
              <Timeline.Item
                key={idx}
                color={getRiskColor(event.risk)}
                active={event.risk !== undefined}
                lineActive={event.risk !== undefined}
                bullet={event.risk !== undefined}
                title={
                  <Group spacing={6}>
                    <Text sx={{ lineHeight: 1 }}>
                      {formatTime(new Date(event.start))}
                    </Text>
                    <Text color="dimmed" sx={{ lineHeight: 1 }}>
                      •
                    </Text>
                    <Text size="sm" color="dimmed" sx={{ lineHeight: 1 }}>
                      {getDuration(new Date(event.start), new Date(event.end))}
                    </Text>
                  </Group>
                }
              >
                <Text size="sm">{event.name}</Text>
              </Timeline.Item>
            ))}
            <Timeline.Item sx={{ opacity: 0 }} />
          </Timeline>
        ) : (
          <Text size="lg" pt="xs">
            No events for this day
          </Text>
        )}
      </Box>
    </>
  )
}

AgendaTimeline.propTypes = {
  activeDate: instanceOf(Date).isRequired,
}

export default AgendaTimeline
