import {
  ApolloCache,
  gql,
  useApolloClient,
  useSubscription,
} from "@apollo/client"
import { showNotification } from "@mantine/notifications"
import { useStripe, useElements } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MeDocument } from "../../../generated/graphql"

export const usePay = (clientSecret: string | undefined) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [id, setId] = useState("")
  const client = useApolloClient()
  const { data } = useSubscription(
    gql`
      subscription PaymentDone($paymentDoneId: String!) {
        paymentDone(id: $paymentDoneId) {
          _id
          stripeId
          movies {
            price
            description
          }
        }
      }
    `,
    {
      variables: {
        paymentDoneId: id,
      },
      onData: () => {
        client.refetchQueries({
          include: [MeDocument],
        })
      },
    }
  )
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      if (!stripe || !clientSecret) return
      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)
      if (paymentIntent) {
        setId(paymentIntent.id)
        switch (paymentIntent.status) {
          case "succeeded":
            showNotification({ message: "Payment Succeded" })
            navigate(`/success-pay-custom/${paymentIntent.id}`)
            break
          default:
            break
        }
      }
    })()
  }, [stripe])
  if (data?.paymentDone?.stripeId) {
    console.log(data)
    navigate(`/success-pay-custom/${data.paymentDone.stripeId}`)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!stripe || !elements) return
    setIsLoading(true)
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:5173/success-pay-custom/${id}`,
      },
      redirect: "if_required",
    })
    setIsLoading(false)
    if (error?.message) showNotification({ message: error.message })
  }

  return {
    handleSubmit,
    isLoading: isLoading || !stripe || !elements,
  }
}
