import { useApolloClient, useMutation } from "@apollo/client"
import { useLocalStorage } from "@mantine/hooks"
import { useNavigate } from "react-router-dom"
import {
  MeDocument,
  TokensDto,
  useSignInLocalMutation,
} from "../../../generated/graphql"
import { TOKENS } from "../../../helpers/constants/localStorageKeys"
import { LoginFields } from "../zodSchemas/loginSchema"

export const useSignInLocal = () => {
  const client = useApolloClient()
  const navigate = useNavigate()
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

  return { onLocalSubmit, loading, error }
}
