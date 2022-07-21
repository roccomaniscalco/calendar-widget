import { Skeleton, Stack } from "@mantine/core"

const AgendaDaySkeleton = () => {
  return (
    <Stack mx="md" my="sm" spacing="xs">
      <Skeleton width={100} height={20} />
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={50} />
    </Stack>
  )
}

export default AgendaDaySkeleton
