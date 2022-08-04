import {
  ActionIcon,
  AppShell,
  Avatar,
  Group,
  Header,
  Tabs,
  Text,
  Title,
} from "@mantine/core"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Calendar, Home, MessageCircle } from "tabler-icons-react"
import DarkModeToggle from "~/components/DarkModeToggle"

const AppHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleTabChange = (value) => {
    navigate(value)
  }

  return (
    <Header height={50}>
      <Group position="apart" px="xl" sx={{ height: "100%" }}>
        <Title order={3}>MAGMUTUAL</Title>
        <Tabs
          defaultValue={location.pathname}
          onTabChange={handleTabChange}
          variant="default"
          styles={{
            root: { alignSelf: "end" },
            tabsList: { borderColor: "transparent" },
          }}
        >
          <Tabs.List grow>
            <Tabs.Tab value="/home" icon={<Home size={14} />}>
              <Text>Home</Text>
            </Tabs.Tab>
            <Tabs.Tab value="/discussions" icon={<MessageCircle size={14} />}>
              <Text>Discussions</Text>
            </Tabs.Tab>
            <Tabs.Tab value="/calendar" icon={<Calendar size={14} />}>
              <Text>Calendar</Text>
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <Group>
          <DarkModeToggle />
          <Avatar
            src="pfp.jpg"
            alt="Rocco Maniscalco profile"
            size="sm"
            radius="sm"
            component={ActionIcon}
          />
        </Group>
      </Group>
    </Header>
  )
}

const AppLayout = () => {
  return (
    <AppShell padding="xl" header={<AppHeader />}>
      <Outlet />
    </AppShell>
  )
}

export default AppLayout
