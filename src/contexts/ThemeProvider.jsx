import { ColorSchemeProvider, Global, MantineProvider } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { node } from "prop-types"

const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "color-scheme",
    defaultValue: "light",
  })

  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark")

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          colorScheme,
          components: {
            Card: {
              styles: (theme) => ({
                root: {
                  backgroundColor:
                    theme.colorScheme === "light"
                      ? theme.white
                      : theme.colors.dark[7],
                  borderColor:
                    theme.colorScheme === "light"
                      ? theme.colors.gray[2]
                      : theme.colors.dark[6],
                },
              }),
            },
          },
        }}
      >
        <Global
          styles={(theme) => ({
            body: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: node,
}

export default ThemeProvider
