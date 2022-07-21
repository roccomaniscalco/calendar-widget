import { createStyles, Text } from "@mantine/core"
import { instanceOf, oneOf, string } from "prop-types"

const useStyles = createStyles((theme) => ({
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
    borderRadius: theme.radius.md,
    width: 3,
  },
  high: {
    backgroundColor: theme.colors.red[7],
  },
  medium: {
    backgroundColor: theme.colors.yellow[7],
  },
  low: {
    backgroundColor: theme.colors.green[7],
  },
}))

const AgendaListItem = ({ name, start, end, risk }) => {
  const { classes, cx } = useStyles()

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
  }

  return (
    <div className={classes.root}>
      {risk && <div className={cx(classes.indicator, classes[risk])} />}
      <Text size="sm" weight={600} mt={-4} sx={{ flex: 1 }}>
        {name}
      </Text>
      <div>
        <Text size="xs"  align="right" mt={-4}>
          {formatTime(start)}
        </Text>
        <Text size="xs"  align="right" >
          {formatTime(end)}
        </Text>
      </div>
    </div>
  )
}

AgendaListItem.propTypes = {
  name: string.isRequired,
  start: instanceOf(Date).isRequired,
  end: instanceOf(Date).isRequired,
  risk: oneOf(["low", "medium", "high"]),
}

export default AgendaListItem
