import React from "react";
import { UserListWidget } from "@/widgets/UserListWidget/UserListWidget";
import { Button } from "antd";
import { Wrapper, Header, StyledButton } from "./UsersPage.style";
import { useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/logout";


export function UserPage() {

    const navigate = useNavigate();

    function exit(){
        logout();
        navigate("/login");
    }
    return (
        <Wrapper>
            <Header>
                <Button type="primary" size="middle" onClick={exit}>Выход</Button>
            </Header>
            <UserListWidget/>
            <StyledButton type="primary" size="middle">Создать пользователя</StyledButton>
        </Wrapper>
    );
}