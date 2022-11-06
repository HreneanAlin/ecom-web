import { Button, NumberInput, Text } from "@mantine/core"
import React, { useState } from "react"
import { Movie } from "../../../../generated/graphql"
import { useShoppingCartStore } from "../../../../store"
import clsx from "clsx"
interface AddToCardProps {
  movie: Omit<Movie, "checkoutSessions">
}
export const AddToCard = ({ movie }: AddToCardProps) => {
  const [nrOfItems, setNrOfItems] = useState(0)
  const { addItemToCart, hasItem } = useShoppingCartStore()
  const handleIncrement = () => {
    setNrOfItems(prev => ++prev)
  }
  const handleDecrement = () => {
    setNrOfItems(prev => --prev)
  }

  const handleAddItemToCart = () => {
    addItemToCart({
      movieId: movie._id,
      quantity: nrOfItems,
      name: movie.title,
    })
  }
  return (
    <div className='tw-flex tw-gap-2 tw-mt-4 tw-justify-between'>
      <Button
        className={clsx(!hasItem(movie._id) && !nrOfItems && "tw-invisible")}
        onClick={handleAddItemToCart}
      >
        {hasItem(movie._id) ? (
          <span>Update Cart</span>
        ) : (
          <span>Add to card Cart</span>
        )}
      </Button>
      <div className='tw-flex tw-items-center tw-gap-2'>
        <Button disabled={nrOfItems > 10} onClick={handleIncrement}>
          +
        </Button>
        <Text>{nrOfItems}</Text>
        <Button disabled={nrOfItems <= 0} onClick={handleDecrement}>
          -
        </Button>
      </div>
    </div>
  )
}
