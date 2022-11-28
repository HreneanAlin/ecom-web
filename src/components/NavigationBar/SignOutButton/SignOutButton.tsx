import React from "react"
import { HiLogout } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { Text } from "@mantine/core"
export const SignOutButton = () => {
  const navigate = useNavigate()

  const handleRedirectLogout = () => {
    navigate("/logout")
  }
  return (
    <div
      onClick={handleRedirectLogout}
      className='tw-flex tw-cursor-pointer hover:tw-bg-slate-400 hover:tw-text-gray-900 tw-justify-center tw-pt-2 tw-items-center'
    >
      <div className='tw-flex tw-gap-4'>
        <div>
          <HiLogout size={30} />
        </div>
        <Text size='xl'>Logout</Text>
      </div>
    </div>
  )
}
