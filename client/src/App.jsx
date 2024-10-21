import React from 'react';
import "./App.css";
import Dashboard from './admin/App';
import Blog from './components/Blog';
import Home from './components/Home';
import About from './components/About';
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import EditBlog from './admin/components/EditBlog';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/navbar',
      element: <Navbar />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/admin/connect-publics',
      element: <Dashboard />
    },
    {
      path: '/admin/connect-publics/editblog',
      element: <EditBlog />
    }
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
