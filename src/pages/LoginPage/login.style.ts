import styled from "styled-components";
import { Form } from "antd";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f0f2f5;
    gap: 16px;
`;

export const Container = styled.div`
    max-width: 500px;
    padding: 30px;
    width: 80%;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
    display: flex;
`;

export const ButtonItem = styled(Form.Item)`
    margin-bottom: 0;
    text-align: right;

`;