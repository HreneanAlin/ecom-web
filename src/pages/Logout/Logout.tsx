import React, { useEffect } from "react"
import { useApolloClient } from "@apollo/client"
import { useLocalStorage } from "@mantine/hooks"
import { TokensDto, useSignOutMutation } from "../../generated/graphql"
import { TOKENS } from "../../helpers/constants/localStorageKeys"

export const Logout = () => {
  const client = useApolloClient()
  const [_, _setTokens, removeTokens] = useLocalStorage<TokensDto>({
    key: TOKENS,
  })
  const [signOut] = useSignOutMutation({
    onCompleted: async data => {
      if (data.signOut.success) {
        removeTokens()
        client.clearStore()
        location.replace("/")
      }
    },
  })
  useEffect(() => {
    signOut()
  }, [])

  return <></>
}
