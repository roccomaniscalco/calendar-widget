import {
  HoverCard,
  Text,
  Group,
  Anchor,
  Stack,
  Image,
  Mark,
} from "@mantine/core"
import { node, string } from "prop-types"

const LinkPreviewer = (props) => {
  return (
    <Group position="center">
      <HoverCard
        width={420}
        shadow="xl"
        openDelay={300}
        closeDelay={200}
        position="top"
      >
        <HoverCard.Target>
          <Text>{props.title}</Text>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Image src={props.image} />
            <Anchor
              href={props.href}
              color="dark"
              size="lg"
              weight={500}
              sx={{ lineHeight: 2 }}
            >
              <Mark color="blue"> {props.title}</Mark>
            </Anchor>

            <Stack spacing={5}>
              <Text size="lg" sx={{ lineHeight: 1 }}>
                {props.text}
              </Text>
            </Stack>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  )
}

LinkPreviewer.propTypes = {
  children: node.isRequired,
  image: string.isRequired,
  title: string.isRequired,
  text: string.isRequired,
  href: string.isRequired,
}
export default LinkPreviewer
