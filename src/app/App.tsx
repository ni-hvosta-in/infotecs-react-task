import React from "react";
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";
const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>
    }, 
    {
        path: "*", 
        element: <NotFoundPage/>
    }
]);

export function App (){
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}