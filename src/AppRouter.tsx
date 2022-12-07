import React from "react"
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import { Layout, RootLayout } from "./components"
import {
  Home,
  Movies,
  Movie,
  Login,
  Register,
  SuccessPay,
  Logout,
  Checkout,
  SuccessPayCustom,
} from "./pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<Movie />} />
        <Route path='/success-pay/:sessionId' element={<SuccessPay />} />
        <Route
          path='/success-pay-custom/:intentId'
          element={<SuccessPayCustom />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout/:clientSecret' element={<Checkout />} />
      </Route>
    </Route>
  )
)

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
