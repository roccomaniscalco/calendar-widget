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
  IconAward,
  IconCalendar,
  IconHome,
  IconLogout,
  IconMessageCircle,
  IconSearch,
  IconSettings,
} from "@tabler/icons"
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
              <Tabs.Tab value="/home" icon={<IconHome size={14} />}>
                <Text>Home</Text>
              </Tabs.Tab>
              <Tabs.Tab value="/discussions" icon={<IconMessageCircle size={14} />}>
                <Text>Discussions</Text>
              </Tabs.Tab>
              <Tabs.Tab value="/rewards" icon={<IconAward size={14} />}>
                <Text>Rewards</Text>
              </Tabs.Tab>
              <Tabs.Tab value="/calendar" icon={<IconCalendar size={14} />}>
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
                icon={<IconSearch size={14} />}
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
                    <IconMessageCircle size={14} />
                  </Indicator>
                }
              >
                Mentions
              </Menu.Item>
              <Menu.Item icon={<IconSettings size={14} />}>
                <Group position="apart">
                  Settings <DarkModeToggle />
                </Group>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item icon={<IconLogout size={14} />} color="red">
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
