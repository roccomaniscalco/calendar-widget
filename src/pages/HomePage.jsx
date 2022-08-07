import { Grid, Stack } from "@mantine/core"
import ArticleWidget from "~/components/articles/ArticleWidget"
import CalendarWidget from "~/components/calendar/CalendarWidget"
import DiscussionWidget from "~/components/discsussion/DiscussionWidget"
import RewardsWidget from "~/components/rewards/RewardsWidget"
import KnowledgeWidget from "~/components/wellness/KnowledgeWidget"
import WellnessWidget from "~/components/wellness/WellnessWidget"
const Home = () => {
  return (
    <Grid gutter="sm" sx={{ height: "calc(100vh - 98px)" }}>
      <Grid.Col span={3} sx={{ height: "100%" }}>
        <CalendarWidget />
      </Grid.Col>
      <Grid.Col span={4} sx={{ height: "100%" }}>
        <Stack sx={{ height: "100%" }}>
          <div style={{ height: "30%" }}>
            <WellnessWidget />
          </div>
          <div style={{ height: "40%" }}>
            <KnowledgeWidget />
          </div>
          <div style={{ height: "30%" }}>
            <RewardsWidget />
          </div>
        </Stack>
      </Grid.Col>
      <Grid.Col span={5} sx={{ height: "100%" }}>
        <Stack sx={{ height: "100%" }}>
          <div style={{ height: "40%" }}>
            <ArticleWidget />
          </div>
          <div style={{ height: "60%" }}>
            <DiscussionWidget />
          </div>
        </Stack>
      </Grid.Col>
    </Grid>
  )
}

export default Home
