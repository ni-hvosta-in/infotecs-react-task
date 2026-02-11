import React from "react";
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>
    }
]);

export function App (){
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}