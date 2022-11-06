import React from "react"
import {
  BrowserRouter,
  Routes,
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { Layout, RootLayout } from "./components"
import { Home, Movies, Movie, Login, Register, SuccessPay } from "./pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<Movie />} />
        <Route path='/success-pay' element={<SuccessPay />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Route>
  )
)

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
