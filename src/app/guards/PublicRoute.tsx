import React, { ReactElement } from "react";
import { GuardProps } from "./GuardProps";
import { Navigate } from "react-router-dom";

export function PublicRoute({children} : GuardProps) : ReactElement {
    
    const token = localStorage.getItem("token");
    if (token){
        return <Navigate to={"/users"} replace = {true}/>
    } 
    
    return children;
}
