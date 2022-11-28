import React from "react"
import { Divider, Navbar, NavLink as MantineNavLink } from "@mantine/core"
import { NavLink } from "react-router-dom"

import { HiOutlineHome, HiOutlineFilm } from "react-icons/hi"
import { SignInButton } from "./SignInButton"
import { useMeQuery } from "../../generated/graphql"
import { SignOutButton } from "./SignOutButton"
export const NavigationBar = () => {
  const { data } = useMeQuery()

  return (
    <Navbar className='tw-h-screen' width={{ base: 300 }}>
      <div className='tw-flex tw-flex-col tw-h-[93.7vh]'>
        <div className='tw-flex-grow'>
          <NavLink to='/' end>
            {({ isActive }) => (
              <MantineNavLink
                label='Home'
                active={isActive}
                icon={<HiOutlineHome size={16} />}
              />
            )}
          </NavLink>
          <NavLink to='/movies'>
            {({ isActive }) => (
              <MantineNavLink
                label='Movies'
                active={isActive}
                icon={<HiOutlineFilm size={16} />}
              />
            )}
          </NavLink>
        </div>
        <Divider />
        {data?.me?.email ? <SignOutButton /> : <SignInButton />}
      </div>
    </Navbar>
  )
}
