import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { API_URL } from "../helpers/constants/env"
import { setContext } from "@apollo/client/link/context"
import { TOKENS } from "../helpers/constants/localStorageKeys"
import dayjs from "dayjs"
import {
  RefreshTokensDocument,
  RefreshTokensMutation,
  TokensDto,
} from "../generated/graphql"

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`,
})

const authLink = setContext(async (_, { headers }) => {
  const tokenStr = localStorage.getItem(TOKENS)
  if (tokenStr) {
    let tokens = JSON.parse(tokenStr) as TokensDto
    const expDate = dayjs(tokens.tokenExpiration)
    if (expDate.isBefore(dayjs())) {
      try {
        const res = await clientRefresh.mutate<RefreshTokensMutation>({
          mutation: RefreshTokensDocument,
        })
        if (res.data?.refreshTokens) {
          tokens = res.data.refreshTokens
          localStorage.setItem(TOKENS, JSON.stringify(res.data.refreshTokens))
        }
      } catch (err) {
        console.error(err)
      }
    }
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${tokens.token}`,
      },
    }
  } else {
    return { headers }
  }
})

const authRefreshLink = setContext(async (_, { headers }) => {
  const tokenStr = localStorage.getItem(TOKENS)
  const tokens = JSON.parse(tokenStr || "") as TokensDto

  if (tokenStr && !headers?.authorization) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${tokens.refreshToken}`,
      },
    }
  } else {
    return { headers }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
export const clientRefresh = new ApolloClient({
  link: authRefreshLink.concat(httpLink),
  cache: new InMemoryCache(),
})
