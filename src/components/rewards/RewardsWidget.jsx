import { Box, Card, Container, Text } from "@mantine/core"
import { IconCoin } from "@tabler/icons"
import ProgressRing from "~/components/rewards/ProgressRing"
import RewardsCoins from "~/components/rewards/RewardsCoins"
import RewardsLink from "~/components/rewards/RewardsLink"

const RewardsWidget = () => {
  return (
    <Card
      withBorder
      pt="md"
      sx={{
        minWidth: "min-content",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Container spacing={0}>
        <Text align="center" size="xl" weight={700} underline>
          Rewards Center
        </Text>
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "no-wrap",
        }}
      >
        <IconCoin size={90} />
        <Container align="left" width="50%" p="sm">
          <RewardsCoins />
          <RewardsLink />
        </Container>

        <Container align="right" width="50%">
          <ProgressRing />
        </Container>
      </Box>
    </Card>
  )
}

export default RewardsWidget
