import { Skeleton, Stack } from "@mantine/core"

const AgendaSkeleton = () => {
  return (
    <Stack mx="md" my="sm" spacing="xs">
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={100} />
      <Skeleton height={50} />
      <Skeleton height={50} />
      <Skeleton height={100} />
      <Skeleton height={50} />
    </Stack>
  )
}

export default AgendaSkeleton
