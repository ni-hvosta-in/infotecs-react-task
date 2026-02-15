import React from "react";
import { Form, Modal, Input, notification, message , Button} from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { postUser } from "../api/postUser";

const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    display: flex;
    margin-top: 0;
`;

interface CreateUserModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateUserModal({open, onClose} : CreateUserModalProps){
    
    
    const queryClient = useQueryClient();


    const post = useMutation({
        mutationFn: postUser,
        onSuccess: () => {
            notification.success({
                message: "Пользователь успешно добавлен"
            })
            queryClient.invalidateQueries({queryKey:["users"]});
            onClose();
        }, 
        onError: (error : Error) => {
            notification.error({
                message: "Ошибка при попытке создать пользователя",
                description: error.message
            });
            onClose();
        }
    });


    return (
        <Modal 
                open={open}
                onCancel={() => !post.isPending ?onClose(): notification.warning({message: "Подождите, идет запрос"})}
                destroyOnHidden={true} 
                footer = {[
                    <Button type="primary" htmlType = "submit" key="create" form="createUser" loading={post.isPending}>Создать</Button>,
                    <Button type="primary" onClick={onClose} key="cancel" loading={post.isPending}>Отмена</Button>
                ]}>
                <Title>Создание пользователя</Title>
                <Form layout="vertical" name="createUser" onFinish={(data) => post.mutate(data)} >
                    <Form.Item name="name" label = "Имя" rules={[{required: true, message: "Введите логин"}]} >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="avatar" 
                        label = "Ссылка на аватарку" 
                        rules={[{type: "url", message: "Введите корректную ссылку на аватарку"}, 
                        {required: true, message: "Введите ссылку на аватарку"}]}>
                        <Input/>
                    </Form.Item>
                </Form>
        </Modal>
    );
}