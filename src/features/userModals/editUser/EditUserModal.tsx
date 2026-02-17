import { api } from "@/app/Api";
import { User} from "@/entities/model/User";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal, Button, Form, Input, notification } from "antd";
import React, { useEffect } from "react";
import { editUser } from "../../api/editUser";
import { deleteUser } from "../../api/deleteUser";
import { UserFields } from "../UserField";
import { Title } from "../modal.style";
import { trimData } from "@/utilities/trimData";
interface EditUserModalProps {
    open: boolean;
    onClose: () => void;
    selectedUser?: User;
}

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
                message: "Ошибка при попытке удаления пользователя",
                description: error.message
            });
        }
    });

    const [form] = Form.useForm();
    
    useEffect(() => {
        selectedUser ? form.setFieldsValue(selectedUser) : form.resetFields(); 
    }, [selectedUser]);

    const handleClose = () => {
        form.setFieldsValue(selectedUser);
        onClose();
    }

    const isPending = edit.isPending || remove.isPending;
    
    return (
        <Modal
            open={open}
            onCancel={() => !isPending ? handleClose(): notification.warning({message: "Подождите, идет запрос"})}
            forceRender = {true}
            footer = {[
                <Button type="primary" onClick={() => selectedUser && remove.mutate(selectedUser)} key="delete" loading={isPending}>Удалить</Button>,
                <Button type="primary" onClick={() => form.submit()} key="save"  loading={isPending}>Сохранить</Button>,
                <Button type="primary" onClick={handleClose} key="cancel" loading={isPending}>Отмена</Button>
            ]}>
            <Title>Редактирование пользователя</Title>
            <Form layout="vertical"
                onFinish={(data) => {
                    data = trimData(data);
                    edit.mutate(data)
                    }}
                    form={form}>
                <UserFields showId = {true}/>
            </Form>
        </Modal>
    );
}
