import React from "react";
import { Form, Input } from "antd";

interface UserFieldsProps{
    showId: boolean;
}
export function UserFields({showId}: UserFieldsProps){
    return (
        <>
            {showId && (
            <Form.Item name="id" label="id">
                <Input disabled = {true}/>
            </Form.Item>
            )}
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
        </>
    )
}