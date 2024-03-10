import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Pages/Dashboard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);