import { Card, Group, Badge, Button, Image, Text } from "@mantine/core"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Movie } from "../../../../generated/graphql"
import { AddToCard } from "../AddToCard"

interface MovieCardProps {
  movie: Omit<Movie, "checkoutSessions">
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate(`/movies/${movie._id}`)
  }
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder>
      <Card.Section>
        <Image
          src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
          height={160}
          alt='Norway'
        />
      </Card.Section>

      <Group position='apart' mt='md' mb='xs'>
        <Text weight={500}>{movie.title}</Text>
        {movie.onSale && (
          <Badge color='pink' variant='light'>
            On Sale
          </Badge>
        )}
      </Group>

      <Text size='sm' color='dimmed'>
        {movie.description}
      </Text>

      <Text>Price: {movie.price} USD</Text>
      <Button
        onClick={handleRedirect}
        variant='light'
        color='blue'
        fullWidth
        mt='md'
        radius='md'
      >
        Details!
      </Button>
      <AddToCard movieId={movie._id} />
    </Card>
  )
}
