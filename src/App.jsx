import {
  ActionIcon,
  AppShell,
  Avatar,
  Grid,
  Group,
  Header,
  Tabs,
  Text,
  Title,
} from "@mantine/core"
import { Calendar, Home, MessageCircle } from "tabler-icons-react"
import CalendarWidget from "~/components/calendar/CalendarWidget"
import DarkModeToggle from "~/components/DarkModeToggle"

const AppHeader = () => {
  return (
    <Header height={50}>
      <Group position="apart" px="xl" sx={{ height: "100%" }}>
        <Title order={3}>MAGMUTUAL</Title>
        <Tabs
          variant="default"
          styles={{
            root: { alignSelf: "end" },
            tabsList: { borderColor: "transparent" },
          }}
        >
          <Tabs.List grow>
            <Tabs.Tab value="gallery" icon={<Home size={14} />}>
              <Text>Home</Text>
            </Tabs.Tab>
            <Tabs.Tab value="messages" icon={<MessageCircle size={14} />}>
              <Text>Discussions</Text>
            </Tabs.Tab>
            <Tabs.Tab value="settings" icon={<Calendar size={14} />}>
              <Text>Calendar</Text>
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <Group>
          <DarkModeToggle />
          <Avatar
            src="pfp.jpg"
            alt="it's me"
            size="sm"
            radius="sm"
            component={ActionIcon}
          />
        </Group>
      </Group>
    </Header>
  )
}

const App = () => {
  return (
    <AppShell padding="xl" header={<AppHeader />} fixed>
      <Grid gutter={0} sx={{ height: "calc(100vh - 98px)" }}>
        <Grid.Col span={2} sx={{ height: "100%" }}>
          <CalendarWidget />
        </Grid.Col>
      </Grid>
    </AppShell>
  )
}

export default App
