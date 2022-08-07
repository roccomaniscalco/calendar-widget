import { Card, Stack, Text } from "@mantine/core"
import ErrorBoundary from "~/components/ErrorBoundary"
import RewardsSkeleton from "~/components/rewards/RewardsSkeleton"
import WellnessLink from "~/components/wellness/WellnessLink"
import WellnessRating from "~/components/wellness/WellnessRating"

const WellnessWidget = () => {
  return (
    <Card
      withBorder
      p="lg"
      sx={{ minWidth: "min-content", overflow: "hidden", height: "100%" }}
    >
      <Stack spacing={0} align="center">
        <ErrorBoundary fallback={<RewardsSkeleton size={48} />}>
          <Text size="xl" weight={700} underline>
            Wellness Check-In
          </Text>
          <Text size="lg" p="sm">
            Using the buttons below, describe how you are feeling today?
          </Text>
          <WellnessRating />
          <WellnessLink />
        </ErrorBoundary>
      </Stack>
    </Card>
  )
}

export default WellnessWidget
