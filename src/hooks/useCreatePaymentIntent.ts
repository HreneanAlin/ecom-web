import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  MeDocument,
  useCreatePaymentIntentMutation,
} from "../generated/graphql"
import { useShoppingCartStore } from "../store"

export const useCreatePaymentIntent = () => {
  const navigate = useNavigate()

  const [createPaymentIntent, { loading, error, data }] =
    useCreatePaymentIntentMutation({
      refetchQueries: [MeDocument],
      onCompleted: data => {
        if (data.createPaymentIntent.clientSecret) {
          navigate(`/checkout/${data.createPaymentIntent.clientSecret}`)
        }
      },
    })

  return {
    createPaymentIntent,
    loading,
    error,
    clientSecret: data?.createPaymentIntent.clientSecret,
  }
}
