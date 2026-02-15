import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

export const WraperInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
`;

export const Name = styled.h3`
    cursor: pointer;
    font-size: 18px;
    font-color: #000;
    font-weight: 600;
    margin: 0;
`;

export const CreatedAt = styled.span`
    font-size: 16px;
    color: #666;
`;
