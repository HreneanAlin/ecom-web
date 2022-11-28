import React from "react"
import { HiLockClosed, HiInformationCircle } from "react-icons/hi"
import { Dialog, Text } from "@mantine/core"
import { LoginForm } from "./LoginForm"
import { Link } from "react-router-dom"
export const Login = () => {
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-items-center tw-mt-4'>
        <div>
          <HiLockClosed size={100} />
        </div>
        <Text className='tw-text-5xl'>Log in to Ecom</Text>
        <LoginForm />
        <Dialog opened>
          <div className='tw-flex tw-justify-between'>
            <div>
              <HiInformationCircle size={50} />
            </div>
            <div>
              <Text align='center'>Don't have an accout?</Text>
              <Text align='center'>
                <Link
                  className='tw-text-blue-300 tw-no-underline hover:tw-underline'
                  to='/register'
                >
                  Register
                </Link>
              </Text>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  )
}
