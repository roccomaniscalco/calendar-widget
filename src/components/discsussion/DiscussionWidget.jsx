import { Card, Stack, Text } from "@mantine/core"
import DiscussionTable from "~/components/discsussion/DiscussionTable"
import ErrorBoundary from "~/components/ErrorBoundary"
import RewardsSkeleton from "~/components/rewards/RewardsSkeleton"

const DiscussionWidget = () => {
  return (
    <Card withBorder pt="lg" sx={{ minWidth: "min-content", height: "97%" }}>
      <Stack spacing={0} align="center">
        <ErrorBoundary fallback={<RewardsSkeleton />}>
          <Text size="xl" weight={700} underline>
            Discussion Board
          </Text>
          <DiscussionTable />
        </ErrorBoundary>
      </Stack>
    </Card>
  )
}

export default DiscussionWidget
