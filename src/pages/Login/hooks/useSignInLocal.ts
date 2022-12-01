import { useApolloClient, useMutation } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLocalStorage } from "@mantine/hooks"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import {
  MeDocument,
  TokensDto,
  useSignInLocalMutation,
} from "../../../generated/graphql"
import { TOKENS } from "../../../helpers/constants/localStorageKeys"
import { LoginFields, loginSchema } from "../zodSchemas/loginSchema"

export const useSignInLocal = () => {
  const client = useApolloClient()
  const navigate = useNavigate()
  const { register, handleSubmit, formState, setError } = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  })
  const [_, setTokens] = useLocalStorage<TokensDto>({ key: TOKENS })
  const [signInLocal, { loading, error }] = useSignInLocalMutation({
    onCompleted: data => {
      if (data?.signInLocal.tokens) {
        setTokens(data.signInLocal.tokens)
        client.refetchQueries({
          include: [MeDocument],
        })
        navigate("/")
      }
    },
    onError: error => {
      const serverErrors = error.graphQLErrors[0]
      if (serverErrors.message === "wrong email") {
        setError("email", { message: "Unknown Email" })
      }
      if (serverErrors.message === "wrong password") {
        setError("password", { message: "Wrong Password" })
      }
    },
  })

  const onLocalSubmit = (values: LoginFields) => {
    signInLocal({
      variables: {
        signInLocal: {
          password: values.password,
          email: values.email,
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
  }
}
