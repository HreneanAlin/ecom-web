import { Button } from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import React, { useEffect, useState } from "react"

interface CheckoutFormProps {
  clientSecret: string | undefined
}

export const CheckoutForm = ({ clientSecret }: CheckoutFormProps) => {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (!stripe || !clientSecret) return
      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)
      console.log(
        "🚀 ~ file: CheckoutForm.tsx:20 ~ ; ~ paymentIntent ",
        paymentIntent
      )
      if (paymentIntent) {
        switch (paymentIntent.status) {
          case "succeeded":
            showNotification({ message: "Payment Succeded" })
            break
          case "processing":
            showNotification({ message: "Your payment is processing." })
          case "requires_payment_method":
            showNotification({
              message: "Your payment was not successful, please try again.",
            })
            break
          default:
            showNotification({ message: "Something went wrong" })
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
        return_url: "http://localhost:5173/",
      },
    })
    setIsLoading(false)
    if (error.message) showNotification({ message: error.message })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PaymentElement id='payment-element' options={{ layout: "tabs" }} />
        <Button type='submit' loading={isLoading || !stripe || !elements}>
          Pay now
        </Button>
      </form>
    </div>
  )
}
