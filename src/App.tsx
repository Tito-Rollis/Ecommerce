import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Products } from './pages/Products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const Layout = () => {
    return (
        <div className="app">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/products/:id',
                element: <Products />,
            },
            {
                path: '/product/:id',
                element: <Product />,
            },
        ],
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
