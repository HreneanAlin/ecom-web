import { Card, Table, Text } from "@mantine/core"
import React from "react"
import { HiBadgeCheck } from "react-icons/hi"
import { MovieDto } from "../../generated/graphql"
import { TableRow } from "./components"

interface PaymentSuccessCardProps {
  movies: MovieDto[]
}

export const PaymentSuccessCard = ({ movies }: PaymentSuccessCardProps) => {
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
          {movies.map(movieDto => (
            <TableRow key={movieDto._id} movieDto={movieDto} />
          ))}
        </tbody>
      </Table>
    </Card>
  )
}
