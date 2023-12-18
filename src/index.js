import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostDetails from './pages/PostDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Edit from './pages/Edit';
import UserProfile from './pages/UserProfile';
import Create from './pages/Create';
import Authors from './pages/Authors';
import Logout from './pages/Logout';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([{
  peth:'/',
  element: <Layout/>,
  errorElement: <ErrorPage/>,
  children:[
    {index: true, element: <Home />},
    {path: "posts/:id", element: <PostDetails />},
    {path: "register", element: <Register />},
    {path: "login", element: <Login />},
    {path: "profile/:id", element: <UserProfile />},
    {path: "create", element: <Create />},
    {path: "posts/:id/edit", element: <Edit />},
    {path: "logout", element: <Logout />},
    {path: "posts/users/:id", element: <Authors />},
    {path: "posts/categories/:category", element: <CategoryPosts />},
    {path: "authors", element: <AuthorPosts />},
    {path: "dashboard", element: <Dashboard />},


  ]
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);
