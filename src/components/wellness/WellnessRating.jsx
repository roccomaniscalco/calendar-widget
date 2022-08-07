import { ActionIcon, Center } from "@mantine/core"
import { useState } from "react"
import {
  MoodConfuzed,
  MoodEmpty,
  MoodHappy,
  MoodSad,
  MoodSmile,
} from "tabler-icons-react"

function WellnessRating() {
  const iconSize = "5rem"
  const [activeValue, setActiveValue] = useState()
  const handleClick = (event) => {
    const button = event.target.matches("button")
      ? event.target
      : event.target.closest("button")
    setActiveValue(button.value)
  }

  return (
    <Center
      onClick={handleClick}
      style={{ width: "100%", maxWidth: 200, height: "100%" }}
    >
      <ActionIcon
        color={activeValue === "sad" ? "red" : "gray"}
        size={iconSize}
        variant="transparent"
        value="sad"
      >
        <MoodSad size={iconSize} strokeWidth={1.5} />
      </ActionIcon>
      <ActionIcon
        color={activeValue === "less-sad" ? "orange" : "gray"}
        size={iconSize}
        variant="transparent"
        value="less-sad"
      >
        <MoodConfuzed size={iconSize} strokeWidth={1.5} />
      </ActionIcon>
      <ActionIcon
        color={activeValue === "neutral" ? "yellow" : "gray"}
        size={iconSize}
        variant="transparent"
        value="neutral"
      >
        <MoodEmpty size={iconSize} strokeWidth={1.5} />
      </ActionIcon>
      <ActionIcon
        color={activeValue === "less-happy" ? "lime" : "gray"}
        size={iconSize}
        variant="transparent"
        value="less-happy"
      >
        <MoodSmile size={iconSize} strokeWidth={1.5} />
      </ActionIcon>
      <ActionIcon
        color={activeValue === "happy" ? "green" : "gray"}
        size={iconSize}
        variant="transparent"
        value="happy"
      >
        <MoodHappy size={iconSize} strokeWidth={1.5} />
      </ActionIcon>
    </Center>
  )
}
export default WellnessRating
