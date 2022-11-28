import React from "react"
import { NavigationBar } from "../NavigationBar"
import { Outlet } from "react-router-dom"
import { AppShell } from "@mantine/core"
import { Header } from "../Header"
import { useMeQuery } from "../../generated/graphql"
export const Layout = () => {
 
  return (
    <AppShell
      padding='md'
      navbar={<NavigationBar />}
      header={<Header />}
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  )
}
