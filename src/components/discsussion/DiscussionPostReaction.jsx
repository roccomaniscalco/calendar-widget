import { ActionIcon, Stack, Text, Transition } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import { IconChevronDown, IconChevronUp } from "@tabler/icons"
import { useReducer } from "react"

const reactions = {
  UP: "up",
  DOWN: "down",
  NEUTRAL: "neutral",
}
const scaleUp = {
  in: { transform: "scale(1)" },
  out: { transform: "scale(1.4)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform",
}
const scaleDown = {
  in: { transform: "scale(1)" },
  out: { transform: "scale(0.6)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform",
}

const switchAnimation = (reaction) => {
  switch (reaction) {
    case reactions.UP:
      return scaleUp
    case reactions.DOWN:
      return scaleDown
    default:
      return "none"
  }
}
const ratingReducer = (rating, reaction) => {
  switch (reaction.type) {
    case reactions.UP:
      return {
        count: rating.initialCount + 1,
        initialCount: rating.initialCount,
        reaction: reactions.UP,
      }
    case reactions.DOWN:
      return {
        count: rating.initialCount - 1,
        initialCount: rating.initialCount,
        reaction: reactions.DOWN,
      }
    case reactions.NEUTRAL:
      return {
        count: rating.initialCount,
        initialCount: rating.initialCount,
        reaction: reactions.NEUTRAL,
      }
    default:
      throw new Error(
        `Invalid action type for reactionReducer. 
        action.type must be one of ${Object.values(reactions)}. 
        received: ${reaction.type}`
      )
  }
}

const DiscussionPostReaction = () => {
  // dummy initial state
  const initialRating = {
    count: 32,
    prevCount: 32,
    initialCount: 32,
    reaction: reactions.NEUTRAL,
  }
  const [rating, dispatchReaction] = useReducer(ratingReducer, initialRating)
  const [debouncedRatingCount] = useDebouncedValue(rating.count, 150)
  const animation = switchAnimation(rating.reaction)

  const handleUpVoteClick = () => {
    if (rating.reaction === reactions.UP)
      dispatchReaction({ type: reactions.NEUTRAL })
    else dispatchReaction({ type: reactions.UP })
  }
  const handleDownVoteClick = () => {
    if (rating.reaction === reactions.DOWN)
      dispatchReaction({ type: reactions.NEUTRAL })
    else dispatchReaction({ type: reactions.DOWN })
  }

  return (
    <Stack align="center">
      <ActionIcon
        size="lg"
        radius="xl"
        variant="transparent"
        onClick={handleUpVoteClick}
        color={rating.reaction === reactions.UP ? "green" : "gray"}
      >
        <IconChevronUp size={32} />
      </ActionIcon>
      <Transition
        mounted={debouncedRatingCount === rating.count}
        transition={animation}
        duration={300}
        timingFunction="ease"
      >
        {(styles) => (
          <Text size="xl" weight="bold" style={styles}>
            {rating.reaction === reactions.NEUTRAL
              ? rating.count
              : debouncedRatingCount}
          </Text>
        )}
      </Transition>
      <ActionIcon
        size="lg"
        radius="xl"
        variant="transparent"
        onClick={handleDownVoteClick}
        color={rating.reaction === reactions.DOWN ? "red" : "gray"}
      >
        <IconChevronDown size={32} />
      </ActionIcon>
    </Stack>
  )
}

export default DiscussionPostReaction
