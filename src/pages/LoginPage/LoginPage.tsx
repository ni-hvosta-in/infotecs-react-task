import React from "react";
import { Input, Form, Button, message } from "antd";
import { Wrapper, Container, Title, ButtonItem } from "./login.style";

function onFinish(values: any) : void {
    console.log('Success:', values);
}
export function LoginPage() {
  return (
    <Wrapper>
        <Container>
            <Title>Авторизация</Title>
            <Form onFinish={onFinish} layout="vertical" size="large" >
                
                <Form.Item name="username" rules={[{required: true, message: "Введите логин"}]}>
                    <Input placeholder="Логин"/>
                </Form.Item>

                <Form.Item name="password" rules={[{required: true, message: "Введите пароль"}]}>
                    <Input.Password placeholder="Пароль"/>
                </Form.Item>

                <ButtonItem>
                    <Button type="primary" htmlType="submit" style={{width: "25%"}}>Войти</Button>
                </ButtonItem>

            </Form>
        </Container>
    </Wrapper>
  );
}
