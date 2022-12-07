import React from "react"

import { Elements, useElements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { STRIPE_PUBLIC_KEY } from "../../helpers/constants/env"
import { CheckoutForm } from "./components/CheckoutForm"
import { useParams } from "react-router-dom"

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY)
export const Checkout = () => {
  const { clientSecret } = useParams()
  return (
    <div className='tw-flex tw-items-center tw-justify-center'>
      <div className='tw-max-w-lg tw-flex-grow'>
        <Elements
          options={{
            appearance: {
              theme: "night",
            },
            clientSecret,
          }}
          stripe={stripePromise}
        >
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      </div>
    </div>
  )
}
