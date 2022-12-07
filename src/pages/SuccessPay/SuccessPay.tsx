import { Card, Image, Text, Table } from "@mantine/core"
import React from "react"
import { HiBadgeCheck } from "react-icons/hi"
import { useParams } from "react-router-dom"
import { useCheckoutSessionQuery } from "../../generated/graphql"
import { TableRow } from "../../components/PaymentSuccessCard/components"
import { PaymentSuccessCard } from "../../components"
export const SuccessPay = () => {
  const { sessionId } = useParams()
  const { loading, data } = useCheckoutSessionQuery({
    variables: {
      checkoutSessionId: sessionId || "",
    },
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (data?.checkoutSession.status !== "complete") {
    return <div>Payment not done</div>
  }

  return <PaymentSuccessCard movies={data.checkoutSession.movies} />
}
