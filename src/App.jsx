import './App.css';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
