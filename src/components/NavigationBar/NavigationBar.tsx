import React from "react"
import { Navbar, NavLink as MantineNavLink } from "@mantine/core"
import { NavLink } from "react-router-dom"
import { IconHome2, IconMovie } from "@tabler/icons"
export const NavigationBar = () => {
  return (
    <Navbar width={{ base: 300 }}>
      <div>
        <NavLink to='/' end>
          {({ isActive }) => (
            <MantineNavLink
              label='Home'
              active={isActive}
              icon={<IconHome2 size={16} />}
            />
          )}
        </NavLink>
        <NavLink to='/movies'>
          {({ isActive }) => (
            <MantineNavLink
              label='Movies'
              active={isActive}
              icon={<IconMovie size={16} />}
            />
          )}
        </NavLink>
      </div>
    </Navbar>
  )
}
