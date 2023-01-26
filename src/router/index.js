import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from '../views/login/Login.jsx';
import Register from '../views/register/Register.jsx';
import Forgot from '../views/forgotpass/Forgot.jsx';
import Profile from '../views/profile/Profile.jsx';
import AddRecipe from '../views/addRecipe/AddRecipe.jsx';
import DetailRecipe from '../views/detailRecipe/DetailRecipe.jsx';
import Update from '../views/updateRecipe/Update.jsx';
import Video from '../views/videoRecipe/VideoRecipe.jsx';
import Landing from '../views/landing/Landing.jsx';
import UserList from '../views/dasboard/UserList.jsx';
import NotFound from '../views/404/notFound.jsx';
import Searchrecipe from '../views/searchParams/Searchrecipe';

const Router = () => {
  const PrivateRoute = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return <Outlet />;
    } else {
      alert('Login dulu yaaa!');
      return <Navigate to="/login" />;
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="/recipe" element={<Searchrecipe />} />

          <Route path="/profile" element={<PrivateRoute />}>
            <Route index element={<Profile />} />
          </Route>

          <Route path="/add" element={<PrivateRoute />}>
            <Route index element={<AddRecipe />} />
          </Route>

          <Route path="/detail/:id" element={<PrivateRoute />}>
            <Route index element={<DetailRecipe />} />
          </Route>

          <Route path="update/:id" element={<PrivateRoute />}>
            <Route index element={<Update />} />
          </Route>

          <Route path="video" element={<PrivateRoute />}>
            <Route index element={<Video />} />
          </Route>

          <Route path="list" element={<PrivateRoute />}>
            <Route index element={<UserList />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
