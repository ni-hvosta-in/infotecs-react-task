import styled from "styled-components";
import { Button } from "antd";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    padding-top: 16px;
`;
export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
    margin-top: 24px;
    width: 250px;
`;
