import { useLocalStorage } from "@mantine/hooks"
import { showNotification } from "@mantine/notifications"
import { useNavigate } from "react-router-dom"
import {
  TokensDto,
  useSignUpLocalMutation,
  MeDocument,
} from "../../../generated/graphql"
import { TOKENS } from "../../../helpers/constants/localStorageKeys"
import { RegisterFields, registerSchema } from "../zodSchemas"
import { useApolloClient } from "@apollo/client"
import { ServerValidationError } from "../../../types/ServerValidationError"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export const useSignUpLocal = () => {
  const navigate = useNavigate()
  const client = useApolloClient()
  const { register, handleSubmit, formState, watch, setError } =
    useForm<RegisterFields>({
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
  const [_, setTokens] = useLocalStorage<TokensDto>({ key: TOKENS })
  const [signUpLocal, { loading, error }] = useSignUpLocalMutation({
    onCompleted: async data => {
      if (data?.signUpLocal.tokens) {
        showNotification({ message: "your account was created" })
        setTokens(data?.signUpLocal.tokens)
      }
      await client.refetchQueries({
        include: [MeDocument],
      })
      navigate("/")
    },
    onError: error => {
      const serverValidationError = error.graphQLErrors[0] as unknown as {
        validationErrors: ServerValidationError<RegisterFields>[]
      }
      if (serverValidationError.validationErrors) {
        serverValidationError.validationErrors.forEach(err => {
          setError(err.property, { message: err.constraints })
        })
      } else {
        showNotification({ message: "something went wrong" })
      }
    },
  })

  const onLocalSubmit = async (values: RegisterFields) => {
    await signUpLocal({
      variables: {
        createUserInput: {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          password: values.password1,
        },
      },
    })
  }

  return {
    onSubmit: handleSubmit(onLocalSubmit),
    loading,
    error,
    register,
    formState,
    watch,
  }
}
