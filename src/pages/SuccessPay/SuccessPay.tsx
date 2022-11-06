import { Badge, Button, Card, Group, Image, Text, Table } from "@mantine/core"
import React from "react"
import { HiBadgeCheck } from "react-icons/hi"

export const SuccessPay = () => {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder>
      <div className='tw-flex tw-justify-center'>
        <HiBadgeCheck className='tw-text-green-600' size={150} />
      </div>
      <Text size='xl' align='center'>
        Payment Successful
      </Text>
      <Table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className='tw-max-w-xs tw-my-2'>
                <Image
                  src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
                  height={160}
                  alt='Norway'
                />
              </div>
            </td>
            <td>
              <Text>2</Text>
            </td>
          </tr>
          <tr>
            <td>
              <div className='tw-max-w-xs tw-my-2'>
                <Image
                  src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
                  height={160}
                  alt='Norway'
                />
              </div>
            </td>
            <td>
              <Text>20$</Text>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}
