import React from "react"
import { Button } from "@mantine/core"
import { useCurrentUser } from "../../hooks/useCurrentUser"
import { useMeQuery } from "../../generated/graphql"

export const Home = () => {
  const { data,loading } = useMeQuery()

  if(loading){
    return <>Loading...</>
  }

  return (
    <div>
      <div className='tw-text-3xl'>Hi {data?.me?.firstName}</div>
      <Button>Hello</Button>
    </div>
  )
}
