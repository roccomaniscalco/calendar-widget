import { createStyles, Text } from "@mantine/core"
import { oneOf, string } from "prop-types"

const useStyles = createStyles((theme, _params, getRef) => ({
  root: {
    display: "flex",
    gap: theme.spacing.xs,
    borderRadius: 5,
    padding: theme.spacing.xs,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
  },
  indicator: {
    ref: getRef("indicator"),
    borderRadius: theme.radius.md,
    width: 3,
  },
  high: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.red[3], 0.8)
        : theme.colors.red[1],
    [`& .${getRef("indicator")}`]: {
      backgroundColor: theme.colors.red[7],
    },
  },
  medium: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.yellow[3], 0.8)
        : theme.colors.yellow[1],
    [`& .${getRef("indicator")}`]: {
      backgroundColor: theme.colors.yellow[7],
    },
  },
  low: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.green[3], 0.8)
        : theme.colors.green[1],
    [`& .${getRef("indicator")}`]: {
      backgroundColor: theme.colors.green[7],
    },
  },
}))

const AgendaEvent = ({ name, start, end, risk }) => {
  const { classes, cx } = useStyles()

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
  }

  return (
    <div className={cx(classes.root, classes[risk])}>
      {risk && <div className={classes.indicator} />}
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
  risk: oneOf(["low", "medium", "high"]),
}

export default AgendaEvent
