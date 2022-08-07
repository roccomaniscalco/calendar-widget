import { List, Text, ThemeIcon } from "@mantine/core"
import { IconCircleCheck } from "@tabler/icons"
import LinkPreviewer from "~/components/articles/LinkPreviewer"
import articleLinks from "~/dummyData/articles"

const ArticleList = () => {
  return (
    <List
      spacing="md"
      size="lg"
      center
      icon={
        <ThemeIcon color="teal" size={20} radius="xl">
          <IconCircleCheck size={20} />
        </ThemeIcon>
      }
    >
      {articleLinks.map((ArticleItem, idx) => (
        <List.Item key={idx}>
          <LinkPreviewer
            href={ArticleItem.href}
            image={ArticleItem.image}
            title={ArticleItem.title}
            text={ArticleItem.text}
          >
            <Text size="sm">{ArticleItem.title}</Text>
          </LinkPreviewer>
        </List.Item>
      ))}
    </List>
  )
}
export default ArticleList
