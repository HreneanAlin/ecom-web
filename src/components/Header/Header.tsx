import React from "react"
import {
  Header as MantineHeader,
  ActionIcon,
  Menu,
  Text,
  NumberInput,
  Indicator,
} from "@mantine/core"
import { HiShoppingCart } from "react-icons/hi"
import { useShoppingCartStore } from "../../store"
import { CartItem } from "./components/CartItem"
import { Field } from "../../types/Field"
export const Header = () => {
  const { fields } = useShoppingCartStore()

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
          </Menu.Dropdown>
        </Menu>
      </div>
    </MantineHeader>
  )
}
