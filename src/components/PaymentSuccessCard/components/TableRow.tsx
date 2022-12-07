import React from "react"
import { Image, Text } from "@mantine/core"
import { MovieDto } from "../../../generated/graphql"
interface TableRowProps {
  movieDto: MovieDto
}

export const TableRow = ({ movieDto }: TableRowProps) => {
  return (
    <tr>
      <td>
        <div className='tw-max-w-xs tw-my-2'>
          <Image
            src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            height={160}
            alt='Norway'
          />
        </div>
        <Text>{movieDto.title}</Text>
      </td>
      <td>
        <Text>{movieDto.quantity}</Text>
      </td>
    </tr>
  )
}
