import React from "react"
import { useParams } from "react-router-dom"
import { useMovieQuery } from "../../generated/graphql"
export const Movie = () => {
  const { id } = useParams()
  const { data } = useMovieQuery({
    variables: {
      movieId: id || "",
    },
  })
  return <div>Movie: {data?.movie.title}</div>
}
