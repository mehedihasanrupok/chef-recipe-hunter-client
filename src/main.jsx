import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import Error from './Components/Error/Error.jsx';
import ChefDetails from './Components/ChefDetails/ChefDetails.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path:'/*',
        element:<Error></Error>
      },
      {
        path:'/chefs/:id',
        element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-recipe-hnter-server-mehedihasanrupok.vercel.app/chefs/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
