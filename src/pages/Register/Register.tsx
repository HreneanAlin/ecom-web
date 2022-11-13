import React from "react"
import { Text } from "@mantine/core"
import { HiOutlineUser } from "react-icons/hi"
import { RegisterForm } from "./components"
export const Register = () => {
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-items-center tw-mt-4'>
        <div>
          <HiOutlineUser size={100} />
        </div>
        <Text className='tw-text-5xl'>Make an Account</Text>
        <RegisterForm />
      </div>
    </div>
  )
}
