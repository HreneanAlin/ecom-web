import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, PasswordInput, TextInput } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { useForm } from "react-hook-form"
import { HiAtSymbol, HiLockClosed } from "react-icons/hi"
import { useSignInLocal } from "../hooks"
import { LoginFields, loginSchema } from "../zodSchemas/loginSchema"
export const LoginForm = () => {
  const [visible, { toggle }] = useDisclosure(false)
  const { onLocalSubmit, loading } = useSignInLocal()
  const { register, handleSubmit, formState } = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  })

  return (
    <form
      onSubmit={handleSubmit(onLocalSubmit)}
      className='tw-w-96 tw-pt-2 tw-flex tw-flex-col tw-gap-3'
    >
      <TextInput
        placeholder='Your Email'
        label='Email'
        withAsterisk
        {...register("email")}
        error={formState.errors.email?.message}
        icon={<HiAtSymbol size={16} />}
      />
      <PasswordInput
        placeholder='Your Password'
        label='Password'
        withAsterisk
        visible={visible}
        icon={<HiLockClosed size={16} />}
        {...register("password")}
        error={formState.errors.password?.message}
        onVisibilityChange={toggle}
      />
      <Button loading={loading} disabled={!formState.isValid} type='submit'>
        Login
      </Button>
    </form>
  )
}
