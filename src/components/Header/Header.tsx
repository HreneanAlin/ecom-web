import React from "react"
import {
  Header as MantineHeader,
  ActionIcon,
  Menu,
  Text,
  NumberInput,
  Indicator,
  Button,
} from "@mantine/core"
import { HiShoppingCart } from "react-icons/hi"
import { useShoppingCartStore } from "../../store"
import { CartItem } from "./components/CartItem"
import { Field } from "../../types/Field"
import { useCreateCheckoutSessionMutation } from "../../generated/graphql"
import { useNavigate } from "react-router-dom"
import { useCreatePaymentIntent } from "../../hooks/useCreatePaymentIntent"
export const Header = () => {
  const { fields } = useShoppingCartStore()
  const [createCheckout, { data, loading }] = useCreateCheckoutSessionMutation()
  const { createPaymentIntent } = useCreatePaymentIntent()
  const navigate = useNavigate()

  const handleCheckout = async () => {
    const { data } = await createCheckout({
      variables: {
        createPayment: {
          products: [...fields.values()].map(field => ({
            movieId: field.movieId,
            quantity: field.quantity,
          })),
        },
      },
    })
    const url = data?.createCheckoutSession.url
    if (url) {
      window.location.href = url
    }
  }

  const handleCustomCheckout = () => {
    createPaymentIntent({
      variables: {
        createPayment: {
          products: [...fields.values()].map(field => ({
            movieId: field.movieId,
            quantity: field.quantity,
          })),
        },
      },
    })
  }

  return (
    <MantineHeader height={60} p='xs'>
      <div className='tw-flex tw-items-center tw-justify-end tw-pr-20'>
        {fields.size > 0 ? (
          <Menu closeOnItemClick={false} shadow='md' width={300}>
            <Menu.Target>
              <Indicator size={16} label={fields.size}>
                <ActionIcon>
                  <HiShoppingCart size={25} />
                </ActionIcon>
              </Indicator>
            </Menu.Target>
            <Menu.Dropdown>
              {[...fields.values()].map(field => (
                <CartItem key={field.movieId} field={field} />
              ))}
              <div className='tw-flex tw-justify-center tw-flex-col tw-pb-2'>
                <Button onClick={handleCheckout} loading={loading}>
                  Go to Checkout
                </Button>
                <Text align='center'>or</Text>
                <Button onClick={handleCustomCheckout}>
                  Go to costum checkout
                </Button>
              </div>
            </Menu.Dropdown>
          </Menu>
        ) : (
          <HiShoppingCart size={25} />
        )}
      </div>
    </MantineHeader>
  )
}
