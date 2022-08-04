import {
  ActionIcon,
  AppShell,
  Avatar,
  Group,
  Header,
  Indicator,
  Menu,
  Tabs,
  Text,
  Title,
} from "@mantine/core"
import { startTransition } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import {
  Calendar,
  Home,
  Logout,
  MessageCircle,
  Search,
  Settings,
} from "tabler-icons-react"
import DarkModeToggle from "~/components/DarkModeToggle"

const AppHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleTabChange = (value) => {
    startTransition(() => navigate(value))
  }

  return (
    <Header height={50}>
      <Group position="apart" px="xl" sx={{ height: "100%" }}>
        <Title order={3}>MAGMUTUAL</Title>
        <Group sx={{ height: "100%" }}>
          <Tabs
            defaultValue={location.pathname}
            onTabChange={handleTabChange}
            variant="default"
            styles={(theme) => ({
              root: { alignSelf: "end" },
              tabsList: { borderColor: "transparent" },
              tab: {
                padding: theme.spacing.sm,
              },
            })}
          >
            <Tabs.List>
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
          <Menu position="bottom-end" width={240} closeOnItemClick={false}>
            <Menu.Target>
              <Avatar
                src="pfp.jpg"
                alt="Rocco Maniscalco profile"
                size="sm"
                radius="lg"
                component={ActionIcon}
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <Group spacing="sm">
                  <Avatar src="pfp.jpg" alt="Rocco Maniscalco profile" />
                  <div>
                    <Text weight="bold">Rocco Maniscalco</Text>
                    <Text size="xs" color="dimmed">
                      Software Engineer
                    </Text>
                  </div>
                </Group>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                icon={<Search size={14} />}
                rightSection={
                  <Text size="xs" color="dimmed">
                    ⌘K
                  </Text>
                }
              >
                Search
              </Menu.Item>
              <Menu.Item
                icon={
                  <Indicator size={8} color="teal">
                    <MessageCircle size={14} />
                  </Indicator>
                }
              >
                Mentions
              </Menu.Item>
              <Menu.Item icon={<Settings size={14} />}>
                <Group position="apart">
                  Settings <DarkModeToggle />
                </Group>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item icon={<Logout size={14} />} color="red">
                Sign Out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
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
