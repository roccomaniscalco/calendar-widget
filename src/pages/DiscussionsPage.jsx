import { Container, Group, MediaQuery, Stack } from "@mantine/core"
import DiscussionPost from "~/components/discsussion/DiscussionPost"
import ProfileSideBar from "~/components/discsussion/ProfileSideBar"

const DiscussionsPage = () => {
  return (
    <Group
      noWrap
      spacing="lg"
      align="start"
      sx={{ width: "100%", position: "relative" }}
    >
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <ProfileSideBar />
      </MediaQuery>

      <Container sx={{ flex: 1, height: "100%" }} p={0}>
        <Stack>
          <DiscussionPost />
          <DiscussionPost />
          <DiscussionPost />
          <DiscussionPost />
          <DiscussionPost />
          <DiscussionPost />
        </Stack>
      </Container>
    </Group>
  )
}

export default DiscussionsPage
