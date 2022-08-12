import { Grid } from "@mantine/core"
import DiscussionPost from "~/components/discsussion/DiscussionPost"
import ProfileSideBar from "~/components/discsussion/ProfileSideBar"

const DiscussionsPage = () => {
  return (
    <Grid sx={{ height: "calc(100vh - 98px)" }}>
      <Grid.Col span={4} sx={{ height: "100%" }}>
        <ProfileSideBar />
      </Grid.Col>
      <Grid.Col span={8}>
        <DiscussionPost/>
      </Grid.Col>
    </Grid>
  )
}

export default DiscussionsPage
