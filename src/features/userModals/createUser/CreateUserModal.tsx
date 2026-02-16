import React from "react";
import { Form, Modal, Input, notification, message , Button} from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUser } from "../../api/postUser";
import { UserFields } from "../UserField";
import { Title } from "../modal.style";

interface CreateUserModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateUserModal({open, onClose} : CreateUserModalProps){
    
    const queryClient = useQueryClient();

    const post = useMutation({
        mutationFn: postUser,
        onSuccess: (data) => {
            notification.success({
                message: `Пользователь ${data.name} успешно добавлен`
            })
            queryClient.invalidateQueries({queryKey:["users"]});
            onClose();
        }, 
        onError: (error : Error) => {
            notification.error({
                message: "Ошибка при попытке создать пользователя",
                description: error.message
            });
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
                <UserFields showId = {false}/>
            </Form>
        </Modal>
    );
}