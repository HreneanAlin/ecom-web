import { AppRouter } from "./AppRouter"
import { MantineProvider } from "@mantine/core"

function App() {
  return (
    <>
      <MantineProvider
        theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppRouter />
      </MantineProvider>
    </>
  )
}

export default App
