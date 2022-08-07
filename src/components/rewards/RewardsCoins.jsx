import { Center, Anchor, Text } from "@mantine/core"

function RewardsCoins() {
  return (
    <Center>
      <Text size="lg">
        You currently have{" "}
        <Anchor href="/rewards" target="_blank">
          25,950 coins
        </Anchor>{" "}
        that can be redeemed for rewards.
      </Text>
    </Center>
  )
}
export default RewardsCoins
