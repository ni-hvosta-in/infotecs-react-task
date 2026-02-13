import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

export const WraperInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
`;

export const Name = styled.h3`
    font-size: 18px;
    font-color: #000;
    font-weight: 600;
    margin: 0;
`;

export const CreatedAt = styled.span`
    font-size: 16px;
    color: #666;
`;
