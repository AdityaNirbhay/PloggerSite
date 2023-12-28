import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutUs from './Components/AboutusComponent';
import Header from './Components/Header';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom"
import BlogBody from './Components/BlogBodyComponenet';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet/>
        </>
    );
};

const plogRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element:<BlogBody/>
            },
            {
                path: "aboutus",
                element: <AboutUs />,
            },

        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={plogRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
