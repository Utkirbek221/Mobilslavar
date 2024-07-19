// src/App.js
import React from 'react';
import "react-circular-progressbar/dist/styles.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Save from './components/Save';
import Profile from './components/Profile';
import Layout from './components/Layout.jsx';
import Home from './components/home';
import ErrorPage from './components/ErrorPage.jsx';
import MusicPlayer from './page/MusicPlayer.jsx';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/save",
          element: <Save />
        },
        {
          path: "/musicplayer",
          element: <MusicPlayer />
        },
      ],
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <ErrorPage />,
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}


export default App;
