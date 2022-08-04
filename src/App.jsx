import { AppShell, Grid, Group, Header, Text } from "@mantine/core"
import CalendarWidget from "~/components/calendar/CalendarWidget"
import DarkModeToggle from "~/components/DarkModeToggle"

const appHeader = (
  <Header height={60}>
    <Group position="apart" px="xl" sx={{ height: "100%" }}>
      <Text size="xl" weight="bold">
        Calendar Widget
      </Text>
      <DarkModeToggle />
    </Group>
  </Header>
)

const App = () => {
  return (
    <AppShell padding="xl" header={appHeader} fixed>
      <Grid gutter={0} sx={{ height: "calc(100vh - 108px)" }}>
        <Grid.Col span={2} sx={{ height: "100%" }}>
          <CalendarWidget />
        </Grid.Col>
      </Grid>
    </AppShell>
  )
}

export default App
