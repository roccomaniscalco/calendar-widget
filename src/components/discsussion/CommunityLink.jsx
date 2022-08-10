import { Avatar, Group, Text, UnstyledButton } from "@mantine/core"
import { elementType, number, string } from "prop-types"
import { Link } from "react-router-dom"

const getInitials = (name) => {
  const names = name.split(" ")
  const initials = names.map((n) => n[0])
  return initials.join("")
}

const CommunityLink = ({ href, name, memberCount, Icon, color }) => {
  return (
    <UnstyledButton
      component={Link}
      to={href}
      sx={(theme) => ({
        padding: theme.spacing.sm,
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
    >
      <Group spacing="xs" noWrap>
        <Avatar radius="xl" color={color}>
          {Icon ? <Icon /> : getInitials(name)}
        </Avatar>
        <div>
          <Text size="sm" weight="bold" lineClamp={1}>
            {name}
          </Text>
          <Text size="xs">{memberCount} members</Text>
        </div>
      </Group>
    </UnstyledButton>
  )
}

CommunityLink.propTypes = {
  href: string.isRequired,
  name: string.isRequired,
  memberCount: number.isRequired,
  Icon: elementType,
  color: string,
}

export default CommunityLink
