import React from "react"
import { HiLockClosed } from "react-icons/hi"
import { Text } from "@mantine/core"
import { LoginForm } from "./LoginForm"
export const Login = () => {
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-items-center tw-mt-4'>
        <div>
          <HiLockClosed size={100} />
        </div>
        <Text className='tw-text-5xl'>Log in to Ecom</Text>
        <LoginForm />
      </div>
    </div>
  )
}
