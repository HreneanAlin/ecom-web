import { Grid } from "@mantine/core"
import React from "react"
import { useMoviesQuery } from "../../generated/graphql"
import { MovieCard } from "./components"
export const Movies = () => {
  const { data, loading } = useMoviesQuery()
  if (loading) {
    return <p>Laoding..</p>
  }
  return (
    <div>
      <Grid>
        {data?.movies.map(movie => (
          <Grid.Col xs={6} lg={3} key={movie._id}>
            <MovieCard movie={movie} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  )
}
