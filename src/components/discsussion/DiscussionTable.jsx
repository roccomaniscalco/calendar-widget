import {
  Avatar,
  Badge,
  Group,
  Text,
  Paper,
  ScrollArea,
  Container,
} from "@mantine/core"
import discussionPosts from "~/dummyData/discussion"

const DiscussionTable = () => {
  const discussion = discussionPosts.map((DiscussionPost) => (
    <div key={DiscussionPost.name}>
      <Paper shadow="md" p="md" radius="lg" withBorder>
        <Group>
          <Avatar src={DiscussionPost.avatar} radius="xl" size="lg" />
          <Text size="lg" weight={700}>
            {DiscussionPost.name}
          </Text>
          <Badge>{DiscussionPost.job}</Badge>
        </Group>
        <Container pt="sm" pl={0}>
          <Text lineClamp={3}>{DiscussionPost.post}</Text>
        </Container>
      </Paper>
    </div>
  ))

  return (
    <ScrollArea style={{ height: 500 }}>
      <Group shadow="xl" p="md">
        {discussion}
      </Group>
    </ScrollArea>
  )
}
export default DiscussionTable
