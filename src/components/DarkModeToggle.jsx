import { createStyles, Switch, useMantineColorScheme } from "@mantine/core"
import { IconMoonStars, IconSun } from "@tabler/icons"

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    "& *": {
      cursor: "pointer",
    },
  },
  icon: {
    pointerEvents: "none",
    position: "absolute",
    zIndex: 1,
    top: 3,
  },
  iconLight: {
    left: 4,
    color: theme.white,
  },
  iconDark: {
    right: 4,
    color: theme.colors.gray[6],
  },
}))

const DarkModeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const { classes, cx } = useStyles()

  return (
    <div className={classes.root}>
      <IconSun className={cx(classes.icon, classes.iconLight)} size={14} />
      <IconMoonStars className={cx(classes.icon, classes.iconDark)} size={14} />
      <Switch
        checked={colorScheme === "dark"}
        onChange={toggleColorScheme}
        size="sm"
        color="indigo"
      />
    </div>
  )
}

export default DarkModeToggle
