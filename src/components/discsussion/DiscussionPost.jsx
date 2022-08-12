import { ActionIcon, Avatar, Card, Group, Text, Title } from "@mantine/core"
import { IconDotsVertical } from "@tabler/icons"
import DiscussionPostReaction from "~/components/discsussion/DiscussionPostReaction"

const DiscussionPost = () => {
  return (
    <Card withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Group>
            <Avatar size="md" radius="xl" color="teal">
              DD
            </Avatar>
            <div>
              <Text mb={-4}>Dr. Doofenshmirtz</Text>
              <Text size="sm" color="dimmed">
                1 hr ago
              </Text>
            </div>
          </Group>
          <ActionIcon size="lg" radius="xl" variant="transparent">
            <IconDotsVertical size={24} />
          </ActionIcon>
        </Group>
      </Card.Section>

      <Card.Section inheritPadding py="lg">
        <Group noWrap align="start" spacing="lg">
          <DiscussionPostReaction />
          <div>
            <Title order={2} mb="xs">
              Lorem ipsum dolor sit amet.
            </Title>
            <Text mb="xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              illo in, doloremque consequatur reprehenderit libero cumque magnam
              cupiditate? Blanditiis, alias.
            </Text>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              illo in, doloremque consequatur reprehenderit libero cumque magnam
              cupiditate? Blanditiis, alias.
            </Text>
          </div>
        </Group>
      </Card.Section>
    </Card>
  )
}

export default DiscussionPost
