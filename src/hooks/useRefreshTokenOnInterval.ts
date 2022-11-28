import { TokensDto, useRefreshTokensMutation } from "../generated/graphql"
import { useInterval, useLocalStorage } from "@mantine/hooks"
import { useEffect } from "react"
import { TOKENS } from "../helpers/constants/localStorageKeys"
import { INTERVAR_REFETCH_TOKEN } from "../helpers/constants/general"

export const useRefreshTokenOnInterval = () => {
  const [tokens, setTokens] = useLocalStorage<TokensDto>({ key: TOKENS })
  const [refreshTokens] = useRefreshTokensMutation({
    context: {
      headers: {
        authorization: `Bearer ${tokens.refreshToken}`,
      },
    },
    onCompleted: data => {
      if (data.refreshTokens) {
        setTokens(data.refreshTokens)
      }
    },
  })
  const interval = useInterval(() => {
    console.log(
      "🚀 ~ file: useRefreshTokenOnInterval.ts ~ line 23 ~ interval ~ tokens",
      tokens
    )
    if (tokens) {
      refreshTokens()
    }
  }, INTERVAR_REFETCH_TOKEN)

  useEffect(() => {
    interval.start()
    return () => {
      interval.stop()
    }
  }, [])
}
