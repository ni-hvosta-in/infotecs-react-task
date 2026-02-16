import React from "react";
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";
import { UserPage } from "@/pages/UsersPage/UsersPage";
import { ProtectedRoute } from "./guards/ProtectedRoute";
import { PublicRoute } from "./guards/PublicRoute";
const router = createBrowserRouter([
    {
        path: "/login",
        element: (
            <PublicRoute>
                <LoginPage/>
            </PublicRoute>
        )
    }, 
    {
        path: "/users",
        element: (
            <ProtectedRoute>
                <UserPage/>
            </ProtectedRoute>
        )
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