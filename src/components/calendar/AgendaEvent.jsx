import { createStyles, Text } from "@mantine/core"
import { oneOf, string } from "prop-types"
import { priority } from "~/constants/priority"

const useStyles = createStyles((theme, _params, getRef) => ({
  root: {
    display: "flex",
    gap: theme.spacing.xs,
    borderRadius: 5,
    padding: theme.spacing.xs,
  },
  indicator: {
    ref: getRef("indicator"),
    borderRadius: theme.radius.md,
    width: 3,
  },
  [priority.HIGH]: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.red[3], 0.8)
        : theme.colors.red[1],
    [`& .${getRef("indicator")}`]: {
      backgroundColor: theme.colors.red[7],
    },
  },
  [priority.MEDIUM]: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.yellow[3], 0.8)
        : theme.colors.yellow[1],
    [`& .${getRef("indicator")}`]: {
      backgroundColor: theme.colors.yellow[7],
    },
  },
  [priority.LOW]: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.green[3], 0.8)
        : theme.colors.green[1],
    [`& .${getRef("indicator")}`]: {
      backgroundColor: theme.colors.green[7],
    },
  },
  [priority.NONE]: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
    [`& .${getRef("indicator")}`]: {
      display: "none",
    },
  },
}))

const AgendaEvent = ({ name, start, end, priority }) => {
  const { classes, cx } = useStyles()

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
  }

  return (
    <div className={cx(classes.root, classes[priority])}>
      <div className={classes.indicator} />
      <Text size="md" mt={-2} weight={600} sx={{ flex: 1, lineHeight: 1.4 }}>
        {name}
      </Text>
      <div>
        <Text size="sm" align="right" sx={{ lineHeight: 1.3 }}>
          {formatTime(new Date(start))}
        </Text>
        <Text size="sm" align="right" sx={{ lineHeight: 1.3 }}>
          {formatTime(new Date(end))}
        </Text>
      </div>
    </div>
  )
}

AgendaEvent.propTypes = {
  name: string.isRequired,
  start: string.isRequired,
  end: string.isRequired,
  priority: oneOf(Object.values(priority)),
}

export default AgendaEvent
