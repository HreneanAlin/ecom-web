import { List } from "@mantine/core"
import React, { useMemo } from "react"
import { HiX, HiCheck } from "react-icons/hi"

interface PasswordChecksProps {
  password: string
}

export const PasswordChecks = ({ password }: PasswordChecksProps) => {
  const isCorrectLength = useMemo(() => {
    return password.length >= 8
  }, [password])
  const containsUpperCase = useMemo(() => {
    const regex = new RegExp(/(?=.*?[A-Z])/)
    return regex.test(password)
  }, [password])

  const containsLowerCase = useMemo(() => {
    const regex = new RegExp(/(?=.*?[a-z])/)
    return regex.test(password)
  }, [password])

  const containsNumber = useMemo(() => {
    const regex = new RegExp(/(?=.*?[0-9])/)
    return regex.test(password)
  }, [password])

  const containsSpecialChar = useMemo(() => {
    const regex = new RegExp(/(?=.*?[#?!@$%^&*-])/)
    return regex.test(password)
  }, [password])
  return (
    <List>
      <List.Item
        icon={
          <>
            {isCorrectLength ? (
              <HiCheck color='green' size={16} />
            ) : (
              <HiX color='red' size={16} />
            )}
          </>
        }
      >
        At least 8 characters
      </List.Item>
      <List.Item
        icon={
          <>
            {containsUpperCase ? (
              <HiCheck color='green' size={16} />
            ) : (
              <HiX color='red' size={16} />
            )}
          </>
        }
      >
        At least one upper case letter
      </List.Item>
      <List.Item
        icon={
          <>
            {containsLowerCase ? (
              <HiCheck color='green' size={16} />
            ) : (
              <HiX color='red' size={16} />
            )}
          </>
        }
      >
        At least one lower case letter
      </List.Item>
      <List.Item
        icon={
          <>
            {containsNumber ? (
              <HiCheck color='green' size={16} />
            ) : (
              <HiX color='red' size={16} />
            )}
          </>
        }
      >
        At least one number
      </List.Item>
      <List.Item
        icon={
          <>
            {containsSpecialChar ? (
              <HiCheck color='green' size={16} />
            ) : (
              <HiX color='red' size={16} />
            )}
          </>
        }
      >
        At least one special character
      </List.Item>
    </List>
  )
}
