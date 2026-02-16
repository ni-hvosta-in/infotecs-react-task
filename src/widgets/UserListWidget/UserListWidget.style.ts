import styled from "styled-components";

export const Wrapper = styled.div`
    max-height: 80vh;
    overflow-y: auto;

    @media (max-width: 768px) {
        max-height: 60vh;
    }
`;
