import { Card, Stack, Text } from "@mantine/core"
import ErrorBoundary from "~/components/ErrorBoundary"
import RewardsSkeleton from "~/components/rewards/RewardsSkeleton"
import KnowledgeQuestion from "~/components/wellness/KnowledgeQuestion"

const KnowledgeWidget = () => {
  return (
    <Card
      withBorder
      p="lg"
      sx={{ minWidth: "min-content", overflow: "hidden", height: "100%" }}
    >
      <Stack spacing={0} align="center">
        <ErrorBoundary fallback={<RewardsSkeleton size={48} />}>
          <Text size="xl" pb="sm" weight={700} underline>
            Knowledge Pop-Up
          </Text>
          <KnowledgeQuestion />
        </ErrorBoundary>
      </Stack>
    </Card>
  )
}

export default KnowledgeWidget
