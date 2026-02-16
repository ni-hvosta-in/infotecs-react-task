import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { GuardProps } from "./GuardProps";

export function ProtectedRoute({children} : GuardProps) : ReactElement{
    
    const token = localStorage.getItem("token");
    
    if (!token){
        return <Navigate to={"/login"} replace = {true}/>
    }

    return children;

}