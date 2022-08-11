import { Avatar, Group, Tabs, Text } from "@mantine/core"
import { arrayOf, bool, elementType, number, shape, string } from "prop-types"

const getInitials = (name) => {
  const names = name.split(" ")
  const initials = names.map((n) => n[0])
  return initials.join("")
}

const CommunityTabs = ({ communities }) => {
  return (
    <Tabs
      orientation="vertical"
      styles={{ tabsList: { borderColor: "transparent", width: "100%" } }}
      defaultValue={communities[0].name}
    >
      <Tabs.List>
        {communities.map((c) => (
          <Tabs.Tab value={c.name} key={c.name}>
            <Group spacing="xs" noWrap>
              <Avatar radius="xl" color={c.color}>
                {c.Icon ? <c.Icon /> : getInitials(c.name)}
              </Avatar>
              <div>
                <Text size="sm" weight="bold" lineClamp={1}>
                  {c.name}
                </Text>
                <Text size="xs">{c.memberCount} members</Text>
              </div>
            </Group>
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}

CommunityTabs.propTypes = {
  communities: arrayOf(
    shape({
      href: string.isRequired,
      name: string.isRequired,
      memberCount: number.isRequired,
      color: string.isRequired,
      Icon: elementType,
      isActive: bool,
    })
  ),
}

export default CommunityTabs
