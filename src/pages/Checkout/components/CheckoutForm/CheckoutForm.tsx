import { Button } from "@mantine/core"
import { PaymentElement } from "@stripe/react-stripe-js"
import React from "react"
import { usePay } from "../../hooks/usePay"

interface CheckoutFormProps {
  clientSecret: string | undefined
}

export const CheckoutForm = ({ clientSecret }: CheckoutFormProps) => {
  const { handleSubmit, isLoading } = usePay(clientSecret)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PaymentElement id='payment-element' options={{ layout: "tabs" }} />
        <div className='tw-flex tw-justify-center tw-pt-4'>
          <Button size='xl' type='submit' loading={isLoading}>
            Pay now
          </Button>
        </div>
      </form>
    </div>
  )
}
