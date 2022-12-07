import React from "react"
import { useParams } from "react-router-dom"
import { PaymentSuccessCard } from "../../components"
import { usePaymentIntentQuery } from "../../generated/graphql"

export const SuccessPayCustom = () => {
  const { intentId } = useParams()
  const { loading, data } = usePaymentIntentQuery({
    variables: {
      paymentIntentId: intentId || "",
    },
  })
  if (loading) {
    return <div>Loading...</div>
  }
  console.log(
    "🚀 ~ file: SuccessPayCustom.tsx:18 ~ SuccessPayCustom ~ data?.paymentIntent.status",
    data?.paymentIntent.status
  )
  if (data?.paymentIntent.status !== "succeeded") {
    return <div>Payment not done</div>
  }
  return <PaymentSuccessCard movies={data.paymentIntent.movies} />
}
