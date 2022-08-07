import { RingProgress, Text } from "@mantine/core"

function ProgressRing() {
  return (
    <>
      <RingProgress
        size={175}
        roundCaps
        sections={[{ value: 60, color: "blue" }]}
        label={
          <Text color="blue" weight={700} align="center" size="1.5rem">
            lvl. 32
          </Text>
        }
      />
    </>
  )
}
export default ProgressRing
