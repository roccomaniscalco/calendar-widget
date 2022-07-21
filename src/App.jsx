import { AppShell, Container, Group, Header, Text } from "@mantine/core"
import CalendarWidget from "~/components/calendar/CalendarWidget"
import DarkModeToggle from "~/components/DarkModeToggle"

const appHeader = (
  <Header height={60}>
    <Container size="xl" px="xl" sx={{ height: "100%" }}>
      <Group position="apart" sx={{ height: "100%" }}>
        <Text size="xl" weight="bold">
          Calendar Widget
        </Text>
        <DarkModeToggle />
      </Group>
    </Container>
  </Header>
)

const App = () => {
  return (
    <AppShell padding={0} header={appHeader}>
      <Container size="xl" p="xl" sx={{ height: "calc(100vh - 60px)" }}>
        <CalendarWidget />
      </Container>
    </AppShell>
  )
}

export default App
