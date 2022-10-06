import React from 'react';
import './App.css';
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signin",
    element: <SigninPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);