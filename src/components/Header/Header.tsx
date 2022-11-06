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
export const Header = () => {
  const { fields } = useShoppingCartStore()
  const [createCheckout, { data, loading }] = useCreateCheckoutSessionMutation()
  const navigate = useNavigate()

  const handleCheckout = async () => {
    const { data } = await createCheckout({
      variables: {
        createCheckoutSession: {
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

  return (
    <MantineHeader height={60} p='xs'>
      <div className='tw-flex tw-items-center tw-justify-end tw-pr-20'>
        <Menu closeOnItemClick={false} shadow='md' width={300}>
          <Menu.Target>
            {fields.size ? (
              <Indicator size={16} label={fields.size}>
                <ActionIcon>
                  <HiShoppingCart size={25} />
                </ActionIcon>
              </Indicator>
            ) : (
              <ActionIcon>
                <HiShoppingCart size={25} />
              </ActionIcon>
            )}
          </Menu.Target>
          <Menu.Dropdown>
            {[...fields.values()].map(field => (
              <CartItem key={field.movieId} field={field} />
            ))}
            <div className='tw-flex tw-justify-center'>
              <Button onClick={handleCheckout} loading={loading}>
                Go to Checkout
              </Button>
            </div>
          </Menu.Dropdown>
        </Menu>
      </div>
    </MantineHeader>
  )
}
