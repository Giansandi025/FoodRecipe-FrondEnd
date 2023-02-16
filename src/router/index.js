import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Landing from '../views/Landing'
import Detail from '../views/Detail'
import Insert from '../views/Insert'
import Register from '../views/Register'
import Login from '../views/Login'
import Profile from '../views/Profile'
import Recipe from '../views/Recipe'
import EditRecipe from '../views/EditRecipe'

import Home from '../Pages/Home'

// const PrivateRoute = ({children}) => {
//     const token = localStorage.getItem("token")
//     if (token) {
//         return children
//     } else {
//         return <Navigate to="/logins" />
//     }
// }

const PrivateRoute = () => {
  const token = localStorage.getItem('token')
  if (token) {
    return <Outlet />
  } else {
    return <Navigate to="/login" />
  }
}

const router = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Landing />} />
                </Route>
                <Route path="/register">
                    <Route index element={<Register />} />
                </Route>
                <Route path="/login">
                    <Route index element={<Login />} />
                </Route>
                <Route path="/insert" element={<PrivateRoute />}>
                    <Route index element={<Insert />} />
                </Route>
                <Route path="/edit/recipe/:id" element={<PrivateRoute />}>
                    <Route index element={<EditRecipe />} />
                </Route>
                <Route path="/detail/:id" element={<PrivateRoute />}>
                    <Route index element={<Detail />} />
                </Route>
                <Route path="/profile" element={<PrivateRoute />}>
                    <Route index element={<Profile />} />
                </Route>
                <Route path="/recipe" element={<PrivateRoute />}>
                    <Route index element={<Recipe />} />
                </Route>

                <Route path="/home">
                    <Route index element={<Home />} />
                </Route>

            </Routes>
        </BrowserRouter>
  )
}
export default router
