import { Grid } from "@mantine/core"
import ProfileSideBar from "~/components/discsussion/ProfileSideBar"

const DiscussionsPage = () => {
  return (
    <Grid gutter={0} sx={{ height: "calc(100vh - 98px)" }}>
      <Grid.Col span={3} sx={{ height: "100%" }}>
        <ProfileSideBar />
      </Grid.Col>
    </Grid>
  )
}

export default DiscussionsPage
