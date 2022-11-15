import { TextInput, PasswordInput, Button} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { HiLockClosed, HiAtSymbol, HiUserCircle } from "react-icons/hi"
import React from "react"
import { useForm } from "react-hook-form"
import { RegisterFields, registerSchema } from "../../zodSchemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { PasswordChecks } from "../PasswordChecks/PasswordChecks"
export const RegisterForm = () => {
  const [visible, { toggle }] = useDisclosure(false)
  const { register, handleSubmit, formState, watch } = useForm<RegisterFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
    },
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (values: RegisterFields) => {
    console.log(values)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='tw-w-96 tw-pt-2 tw-flex tw-flex-col tw-gap-3'
    >
      <TextInput
        placeholder='Your First Name'
        label='First Name'
        icon={<HiUserCircle size={16} />}
        withAsterisk
        error={formState.errors.firstName?.message}
        {...register("firstName")}
      />
      <TextInput
        placeholder='Your Last Name'
        label='Last Name'
        withAsterisk
        {...register("lastName")}
        error={formState.errors.lastName?.message}
        icon={<HiUserCircle size={16} />}
      />
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
        {...register("password1")}
        error={formState.errors.password1?.message}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        placeholder='Repeat Password'
        label='Repeat Password'
        visible={visible}
        onVisibilityChange={toggle}
        icon={<HiLockClosed size={16} />}
        {...register("password2")}
        error={formState.errors.password2?.message}
        withAsterisk
      />
      <PasswordChecks password={watch("password1")} />
      <Button disabled={!formState.isValid} type='submit'>
        Register
      </Button>
    </form>
  )
}
