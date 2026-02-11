import React, { useEffect } from "react";
import { Input, Form, Button, notification } from "antd";
import { Wrapper, Container, Title, ButtonItem } from "./login.style";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { auth } from "@/features/auth/auth";



export function LoginPage() {

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token){
            navigate("/users");
        } 

    }, [])

    const mutation = useMutation({
        mutationFn: auth,
        onSuccess: (token: string) => {
            localStorage.setItem("token", token);
            navigate("/users")
        },
        onError: (error: Error) => {
            notification.error({
                message: "Ошибка авторизации",
                description: error.message
            })
        }
    });

    
    return (
        <Wrapper>
            <Container>
                <Title>Авторизация</Title>
                <Form onFinish={(data) => mutation.mutate(data)} layout="vertical" size="large" >
                    
                    <Form.Item name="username" rules={[{required: true, message: "Введите логин"}]}>
                        <Input placeholder="Логин"/>
                    </Form.Item>

                    <Form.Item name="password" rules={[{required: true, message: "Введите пароль"}]}>
                        <Input.Password placeholder="Пароль"/>
                    </Form.Item>

                    <ButtonItem>
                        <Button type="primary" htmlType="submit" style={{width: "25%"}} loading={mutation.isPending}>Войти</Button>
                    </ButtonItem>

                </Form>
            </Container>
        </Wrapper>
    );
}
