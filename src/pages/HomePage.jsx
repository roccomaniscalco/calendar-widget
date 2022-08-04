import { Grid } from "@mantine/core"
import CalendarWidget from "~/components/calendar/CalendarWidget"

const Home = () => {
  return (
    <Grid gutter={0} sx={{ height: "calc(100vh - 108px)" }}>
      <Grid.Col span={2} sx={{ height: "100%" }}>
        <CalendarWidget />
      </Grid.Col>
    </Grid>
  )
}

export default Home
