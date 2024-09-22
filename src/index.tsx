import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MyForm from './components/Login';
import Home from './components/Home';
import Login from './components/Login';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

const hobbiesData = ["Cats", "Reading", "Sport", "Music"];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/home' element={<Home/>}/>
      <Route path="/form" element={<MyForm />} />
      <Route 
        path="/hobbies" 
        element={<Hobbies name="Evelin" hobbies={hobbiesData} />} 
      />
      <Route path='/login' element={<Login/>}/>
      <Route path="/extra" element={<h1>Extra</h1>} />
      <Route path="/contact" element={<Contact/>} />
    </Route>
  )
)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
