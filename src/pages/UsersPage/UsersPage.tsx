 import React, { useState } from "react";
import { UserListWidget } from "@/widgets/UserListWidget/UserListWidget";
import { Button} from "antd";
import { Wrapper, Header, StyledButton } from "./UsersPage.style";
import { useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/logout";
import { CreateUserModal } from "@/features/createUser/CreateUserModal";

export function UserPage() {

    const [isOpen, setIsOpen] = useState(false);

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
            <StyledButton type="primary" size="middle" onClick={() => setIsOpen(true)}>Создать пользователя</StyledButton>
            <CreateUserModal open = {isOpen} onClose={() => setIsOpen(false)}/>
        </Wrapper>
    );
}