import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home</h1>,
    },
    {
        path: '/products/:id',
        element: <h1>Category</h1>,
    },
    {
        path: '/product/:id',
        element: <h1>Product Detail</h1>,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
