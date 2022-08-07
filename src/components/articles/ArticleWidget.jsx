import { Paper, Stack, Text } from "@mantine/core"
import ArticleList from "~/components/articles/ArticleList"
import ErrorBoundary from "~/components/ErrorBoundary"
import RewardsSkeleton from "~/components/rewards/RewardsSkeleton"

const ArticleWidget = () => {
  return (
    <Paper
      p="lg"
      sx={{ minWidth: "min-content", overflow: "hidden", height: "100%" }}
    >
      <Stack spacing={0} align="center">
        <ErrorBoundary fallback={<RewardsSkeleton size={48} />}>
          <Text size="xl" weight={700} underline pb="md">
            Recommended Articles
          </Text>
          <ArticleList />
        </ErrorBoundary>
      </Stack>
    </Paper>
  )
}

export default ArticleWidget
