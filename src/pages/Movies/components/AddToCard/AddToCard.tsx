import { Button, NumberInput } from "@mantine/core"
import React from "react"
import { MovieDocument } from "../../../../generated/graphql"
import { useApolloClient } from "@apollo/client"

interface AddToCardProps {
  movieId: string
}
export const AddToCard = ({ movieId }: AddToCardProps) => {
  return (
    <div className='tw-flex tw-gap-2 tw-mt-4'>
      <Button variant='light' color='green' fullWidth radius='md'>
        Add to card
      </Button>
      <NumberInput min={0} max={10} />
    </div>
  )
}
