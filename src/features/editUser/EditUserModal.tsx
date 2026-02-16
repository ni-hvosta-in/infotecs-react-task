import { api } from "@/app/Api";
import { User} from "@/entities/model/User";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal, Button, Form, Input, notification } from "antd";
import React, { useEffect } from "react";
import { editUser } from "../api/editUser";
import styled from "styled-components";
import { deleteUser } from "../api/deleteUser";
interface EditUserModalProps {
    open: boolean;
    onClose: () => void;
    selectedUser?: User;
}

const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    display: flex;
    margin-top: 0;
`;

export function EditUserModal({open, onClose, selectedUser} : EditUserModalProps) {


    
    const queryClient = useQueryClient();

    const edit = useMutation({
        mutationFn: editUser,
        onSuccess: (user) => {
            notification.success({
                message: `Пользователь ${user.name} успешно отредактирован`
            })
            queryClient.invalidateQueries({queryKey:["users"]});
            onClose();
        }, 
        onError: (error : Error) => {
            notification.error({
                message: "Ошибка при попытке редактирования пользователя",
                description: error.message
            });
            onClose();
        }
    });

    const remove = useMutation({
        mutationFn: deleteUser,
        onSuccess: (user) => {
            notification.success({
                message: `Пользователь ${user.name} успешно удален`
            })
            queryClient.invalidateQueries({queryKey:["users"]});
            onClose();
        }, 
        onError: (error : Error) => {
            notification.error({
                message: "Ошибка при попытке редактирования пользователя",
                description: error.message
            });
            onClose();
        }
    });

    const [form] = Form.useForm();
    
    useEffect(() => {
        selectedUser ? form.setFieldsValue(selectedUser) : form.resetFields(); 
    }, [selectedUser]);

    return (
        <Modal
            open={open}
            onCancel={() => !edit.isPending ?onClose(): notification.warning({message: "Подождите, идет запрос"})}
            forceRender = {true}
            footer = {[
                <Button type="primary" onClick={() => selectedUser && remove.mutate(selectedUser)} key="delete" loading={edit.isPending}>Удалить</Button>,
                <Button type="primary" onClick={() => form.submit()} key="save"  loading={edit.isPending}>Сохранить</Button>,
                <Button type="primary" onClick={onClose} key="cancel" loading={edit.isPending}>Отмена</Button>
            ]}>
            <Title>Редактирование пользователя</Title>
            <Form layout="vertical" onFinish={(data) => edit.mutate(data)} form={form}>
                <Form.Item name="id" label="id">
                    <Input disabled = {true}/>
                </Form.Item>
                <Form.Item name="name" label = "Имя" rules={[{required: true, message: "Введите имя"}]} >
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
