import { Center, Anchor, Box } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons"

function WellnessLink() {
  return (
    <Anchor href="/Profile" target="_blank">
      <Center inline>
        <Box>See your past moods</Box>
        <IconArrowRight size={15} />
      </Center>
    </Anchor>
  )
}
export default WellnessLink
