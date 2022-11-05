import React from "react"
import { Menu, Text } from "@mantine/core"
import { MovieInput } from "../../../generated/graphql"
import { Field } from "../../../types/Field"
interface CartItemProps {
  field: Field
}

export const CartItem = ({ field }: CartItemProps) => {
  return (
    <Menu.Item>
      <div className='tw-flex tw-items-center tw-justify-between'>
        <Text>{field.name}</Text>
        <div className='tw-w-16'>
          <Text>{field.quantity}</Text>
        </div>
      </div>
    </Menu.Item>
  )
}
