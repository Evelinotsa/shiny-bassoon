import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import MyForm from './components/Login';
import Home from './components/Home';
import Login from './components/Login';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

const hobbiesData = ["Cats", "Reading", "Sport", "Music"];

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/home"/>},
      { path: "home", element: <Home /> },
      { path: "form", element: <MyForm /> },
      { path: "hobbies", element: <Hobbies name="Evelin" hobbies={hobbiesData} /> },
      { path: "login", element: <Login /> },
      { path: "contact", element: <Contact /> },
      { path: "extra", element: <h1>Extra</h1> }
    ]
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
