import { Box, createStyles, Group, Text, Timeline } from "@mantine/core"

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

    ".mantine-Timeline-item:hover": {
      cursor: "pointer",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
    },
  },

  itemBullet: {
    ":not(.mantine-Timeline-itemBulletWithChild)": {
      background:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },
  },
}))

const AgendaTimeline = () => {
  const { classes } = useStyles()

  return (
    <>
      <Box mx="lg">
        <Box className={classes.stickyHeader}>
          <Text size="sm" color="dimmed">
            Wednesday, July 20, 2022
          </Text>
        </Box>
        <Timeline
          bulletSize={16}
          lineWidth={3}
          className={classes.timeline}
          classNames={{ itemBullet: classes.itemBullet }}
        >
          <Timeline.Item
            color="yellow"
            active
            lineActive
            bullet
            title={
              <Group spacing={6}>
                <Text sx={{ lineHeight: 1 }}>6:30 AM</Text>
                <Text color="dimmed" sx={{ lineHeight: 1 }} size="xs">
                  •
                </Text>
                <Text size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
                  1hr 30min
                </Text>
              </Group>
            }
          >
            <Text size="sm">Dentist appointment :|</Text>
          </Timeline.Item>

          <Timeline.Item
            color="teal"
            active
            lineActive
            bullet
            title={
              <Group spacing={6}>
                <Text sx={{ lineHeight: 1 }}>9:15 AM</Text>
                <Text color="dimmed" sx={{ lineHeight: 1 }} size="xs">
                  •
                </Text>
                <Text size="sm" color="dimmed" sx={{ lineHeight: 1 }}>
                  5hr 30min
                </Text>
              </Group>
            }
          >
            <Text size="sm">Go write some code at work :D And Make a PR!</Text>
          </Timeline.Item>

          <Timeline.Item
            title={
              <Group spacing={6}>
                <Text size="md" sx={{ lineHeight: 1 }}>3:00 AM</Text>
                <Text color="dimmed" sx={{ lineHeight: 1 }}>•</Text>
                <Text size="sm" color="dimmed" sx={{ lineHeight: 1 }}>
                  1hr 45min
                </Text>
              </Group>
            }
            color="red"
            active
            lineActive
            bullet
          >
            <Text size="sm" pb="xs">
              Lunch with friends :&#40;
            </Text>
          </Timeline.Item>

          <Timeline.Item title="11:00 AM">
            <Text size="sm">Bedtime</Text>
          </Timeline.Item>

          <Timeline.Item sx={{ opacity: 0 }} />
        </Timeline>

        {/* duplicate of above for testing */}

        <Text size="sm" color="dimmed" pb="xs" className={classes.stickyHeader}>
          Thursday, July 21, 2022
        </Text>
        <Timeline bulletSize={16} lineWidth={3} className={classes.timeline}>
          <Timeline.Item title="6:00 AM">
            <Text size="sm">Use the bathroom</Text>
          </Timeline.Item>

          <Timeline.Item title="9:15 AM" color="red" active lineActive bullet>
            <Text size="sm">Perform open heart surgery</Text>
          </Timeline.Item>

          <Timeline.Item title="3:00 PM">
            <Text size="sm">Use the bathroom</Text>
          </Timeline.Item>

          <Timeline.Item title="11:00 AM">
            <Text size="sm">Bedtime</Text>
          </Timeline.Item>

          <Timeline.Item sx={{ opacity: 0 }} />
        </Timeline>
      </Box>
    </>
  )
}

export default AgendaTimeline
