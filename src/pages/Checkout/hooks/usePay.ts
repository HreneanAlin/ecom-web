import { showNotification } from "@mantine/notifications"
import { useStripe, useElements } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { usePaymentIntentLazyQuery } from "../../../generated/graphql"

export const usePay = (clientSecret: string | undefined) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [id, setId] = useState("")

  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      console.log("hey")
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!stripe || !elements) return
    setIsLoading(true)
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:5173/success-pay-custom/${id}`,
      },
    })
    setIsLoading(false)
    if (error?.message) showNotification({ message: error.message })
  }

  return {
    handleSubmit,
    isLoading: isLoading || !stripe || !elements,
  }
}
