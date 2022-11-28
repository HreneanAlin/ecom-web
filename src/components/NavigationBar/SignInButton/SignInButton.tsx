import React from "react"
import { HiLogin } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { Text } from "@mantine/core"

export const SignInButton = () => {
  const navigate = useNavigate()
  const handleRedirectLogin = () => {
    navigate("/login")
  }
  return (
    <div
      onClick={handleRedirectLogin}
      className='tw-flex tw-cursor-pointer hover:tw-bg-slate-400 hover:tw-text-gray-900 tw-justify-center tw-pt-2 tw-items-center'
    >
      <div className='tw-flex tw-gap-4'>
        <div>
          <HiLogin size={30} />
        </div>
        <Text size='xl'>Login</Text>
      </div>
    </div>
  )
}
