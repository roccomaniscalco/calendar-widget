import { AppShell, Center, Container, Group, Header, Text } from "@mantine/core"
import CalendarWidget from "~/CalendarWidget"
import DarkModeToggle from "~/DarkModeToggle"

const appHeader = (
  <Header height={70}>
    <Container size="sm" sx={{ height: "100%" }}>
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
      <Container size="sm" sx={{ height: "calc(100vh - 70px)" }}>
        <Center sx={{ height: "100%" }}>
          <CalendarWidget />
        </Center>
      </Container>
    </AppShell>
  )
}

export default App
