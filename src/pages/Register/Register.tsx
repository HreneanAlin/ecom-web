import React from "react"
import { Dialog, Text } from "@mantine/core"
import { HiOutlineUser, HiLogin } from "react-icons/hi"
import { RegisterForm } from "./components"
import { Link } from "react-router-dom"
export const Register = () => {
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-items-center tw-mt-4'>
        <div>
          <HiOutlineUser size={100} />
        </div>
        <Text className='tw-text-5xl'>Make an Account</Text>
        <RegisterForm />
        <Dialog opened>
          <div className='tw-flex tw-justify-between'>
            <div>
              <HiLogin size={50} />
            </div>
            <div>
              <Text align='center'>Already have an accout?</Text>
              <Text align='center'>
                <Link
                  className='tw-text-blue-300 tw-no-underline hover:tw-underline'
                  to='/login'
                >
                  Login
                </Link>
              </Text>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  )
}
