import React, { useState } from "react";
import { UserListWidget } from "@/widgets/UserListWidget/UserListWidget";
import { Button} from "antd";
import { Wrapper, Header, StyledButton } from "./UsersPage.style";
import { useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/logout";
import { CreateUserModal } from "@/features/createUser/CreateUserModal";
import { User} from "@/entities/model/User";
import { EditUserModal } from "@/features/editUser/EditUserModal";

export function UserPage() {

    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User>();

    function handleClickUser(user: User): void {
        console.log(user);
        setIsOpenEdit(true);
        setSelectedUser(user);
    }

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
            <UserListWidget onClick = {handleClickUser} />
            <StyledButton type="primary" size="middle" onClick={() => setIsOpenCreate(true)}>Создать пользователя</StyledButton>
            <CreateUserModal open = {isOpenCreate} onClose={() => setIsOpenCreate(false)}/>
            <EditUserModal open = {isOpenEdit} onClose={() => setIsOpenEdit(false)} selectedUser={selectedUser}/>
        </Wrapper>
    );
}
