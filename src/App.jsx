import {
  AppShell,
  Center,
  Container,
  Group,
  Header,
  Loader,
  Text,
} from "@mantine/core"
import { Suspense } from "react"
import { AlertTriangle } from "tabler-icons-react"
import AgendaWidget from "~/components/calendar/CalendarWidget"
import DarkModeToggle from "~/components/DarkModeToggle"
import ErrorBoundary from "~/components/ErrorBoundary"

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
    <AppShell padding={0} header={appHeader}>
      <Container size="sm" sx={{ height: "calc(100vh - 60px)" }}>
        <Center sx={{ height: "100%" }}>
          <ErrorBoundary fallback={<AlertTriangle size={48} />}>
            <Suspense fallback={<Loader variant="bars" color="red" />}>
              <AgendaWidget />
            </Suspense>
          </ErrorBoundary>
        </Center>
      </Container>
    </AppShell>
  )
}

export default App
