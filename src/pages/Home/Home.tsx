import React from "react"
import { Button, Divider } from "@mantine/core"
import { useMeQuery } from "../../generated/graphql"
import { json } from "stream/consumers"

export const Home = () => {
  const { data, loading } = useMeQuery()

  if (loading) {
    return <>Loading...</>
  }

  return (
    <div>
      <div className='tw-text-3xl'>Hi {data?.me?.firstName}</div>
      <Button>Hello</Button>
      {data?.me && (
        <div>
          <p>your payments:</p>
          {data.me.openPayments.map(payment => (
            <div className='tw-flex tw-gap-2'>
              <div>
                <a href={payment.url}>{payment._id}</a>
              </div>
              <div key={payment._id}>{payment.status}</div>
            </div>
          ))}
          <div>
            your movies:
            {data.me.movies.map(movieCol => (
              <div className='tw-flex tw-gap-2' key={movieCol._id}>
                <div>Quantity:{movieCol.quantity}</div>
                <div>{movieCol.movie.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
