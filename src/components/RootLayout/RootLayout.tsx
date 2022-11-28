import React from "react"
import { Outlet } from "react-router-dom"
import { useRefreshTokenOnInterval } from "../../hooks/useRefreshTokenOnInterval"
export const RootLayout = () => {
  // useRefreshTokenOnInterval()
  return <Outlet />
}
