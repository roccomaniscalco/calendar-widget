import { Center, Anchor, Box } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons"

function RewardsLink() {
  return (
    <Anchor href="/rewards" target="_blank">
      <Center sx={{ alignItems: "baseline" }} inline>
        <Box pt="sm">Claim your rewards </Box>
        <IconArrowRight size={15} />
      </Center>
    </Anchor>
  )
}
export default RewardsLink
