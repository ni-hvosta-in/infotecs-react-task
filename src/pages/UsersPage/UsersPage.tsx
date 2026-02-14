import React, { useState } from "react";
import { UserListWidget } from "@/widgets/UserListWidget/UserListWidget";
import { Button, Form, Modal, Input } from "antd";
import { Wrapper, Header, StyledButton } from "./UsersPage.style";
import { useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/logout";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    display: flex;
    margin-top: 0;
`;


export function UserPage() {

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    function exit(){
        logout();
        navigate("/login");
    }

    function handleCancel() {
        setIsOpen(false);
    }

    function handle(data: any){
        console.log(data);
    }
    return (
        <Wrapper>
            <Header>
                <Button type="primary" size="middle" onClick={exit}>Выход</Button>
            </Header>
            <UserListWidget/>
            <StyledButton type="primary" size="middle" onClick={() => setIsOpen(true)}>Создать пользователя</StyledButton>
            <Modal 
                open={isOpen}
                onCancel={handleCancel}
                destroyOnHidden={true} 
                footer = {[
                    <Button type="primary" htmlType = "submit" key="create" form="createUser">Создать</Button>,
                    <Button type="primary" onClick={handleCancel} key="cancel">Отмена</Button>
                ]}>
                <Title>Создание пользователя</Title>
                <Form layout="vertical" name="createUser" onFinish={(data) => handle(data)}>
                    <Form.Item name="name" label = "Имя" rules={[{required: true, message: "Введите логин"}]} >
                        <Input/>
                    </Form.Item>
                    <Form.Item name="avatar" label = "Ссылка на аватарку" rules={[{type: "url", message: "Введите корректную ссылку на аватарку"}, {required: true, message: "Введите ссылку на аватарку"}]} >
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        </Wrapper>
    );
}