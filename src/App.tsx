import { AppRouter } from "./AppRouter"
import { MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"

function App() {
  return (
    <>
      <MantineProvider
        theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>
          <AppRouter />
        </NotificationsProvider>
      </MantineProvider>
    </>
  )
}

export default App
