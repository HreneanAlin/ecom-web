import { Card, Image, Text, Table } from "@mantine/core"
import React from "react"
import { HiBadgeCheck } from "react-icons/hi"
import { useParams } from "react-router-dom"
import { useCheckoutSessionQuery } from "../../generated/graphql"
import { TableRow } from "./components"
export const SuccessPay = () => {
  const { sessionId } = useParams()
  const { loading, data } = useCheckoutSessionQuery({
    variables: {
      checkoutSessionId: sessionId || "",
    },
  })

  if (loading) {
    return <div>Loading...</div>
  }
  if (data?.checkoutSession.status !== "complete") {
    return <div>Payment not done</div>
  }
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
          {data?.checkoutSession.movies.map(movieDto => (
            <TableRow key={movieDto._id} movieDto={movieDto} />
          ))}
        </tbody>
      </Table>
    </Card>
  )
}
