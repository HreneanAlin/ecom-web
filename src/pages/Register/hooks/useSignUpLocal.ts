import { useLocalStorage } from "@mantine/hooks"
import { showNotification } from "@mantine/notifications"
import { useNavigate } from "react-router-dom"
import {
  TokensDto,
  useSignUpLocalMutation,
  MeDocument,
} from "../../../generated/graphql"
import { TOKENS } from "../../../helpers/constants/localStorageKeys"
import { RegisterFields } from "../zodSchemas"
import { useApolloClient } from "@apollo/client"

export const useSignUpLocal = () => {
  const navigate = useNavigate()
  const client = useApolloClient()
  const [_, setTokens] = useLocalStorage<TokensDto>({ key: TOKENS })
  const [signUpLocal, { loading, error }] = useSignUpLocalMutation({
    onCompleted: data => {
      if (data?.signUpLocal.tokens) {
        showNotification({ message: "your account was created" })
        setTokens(data?.signUpLocal.tokens)
      }
      client.refetchQueries({
        include: [MeDocument],
      })
    },
  })

  const onLocalSubmit = async (values: RegisterFields) => {
    try {
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
      navigate("/")
    } catch (err) {
      console.error(err)
      showNotification({ message: "Something went wrong" })
    }
  }

  return { onLocalSubmit, loading, error }
}
