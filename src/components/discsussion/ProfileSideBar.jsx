import {
  Avatar,
  Card,
  Center,
  Divider,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core"

const ProfileSideBar = () => {
  return (
    <Card
      withBorder
      sx={{ height: "100%", minWidth: 250, overflow: "hidden" }}
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={80}
          alt="Norway"
        />
        <Divider />
      </Card.Section>

      <Center mt="-48px">
        <Avatar
          src="pfp.jpg"
          alt="Rocco Maniscalco profile"
          size="xl"
          radius="50%"
        />
      </Center>

      <Stack align="center" pt="xs" spacing="xl">
        <Stack spacing={0} align="center">
          <Text align="center" weight="bold">
            Rocco Maniscalco
          </Text>

          <Text size="sm" color="dimmed">
            Software Engineer
          </Text>
        </Stack>
      </Stack>

      <Card.Section py="xl">
        <Group noWrap position="center" spacing={0} pb="xl">
          <Stack spacing={0} align="center" sx={{ flex: 1 }}>
            <Text>24</Text>
            <Text size="xs">posts</Text>
          </Stack>
          <Divider orientation="vertical" sx={{ height: 48 }} />
          <Stack spacing={0} align="center" sx={{ flex: 1 }}>
            <Text>270</Text>
            <Text size="xs">followers</Text>
          </Stack>
          <Divider orientation="vertical" sx={{ height: 48 }} />
          <Stack spacing={0} align="center" sx={{ flex: 1 }}>
            <Text>84</Text>
            <Text size="xs">following</Text>
          </Stack>
        </Group>
        <Divider />
      </Card.Section>
    </Card>
  )
}

export default ProfileSideBar