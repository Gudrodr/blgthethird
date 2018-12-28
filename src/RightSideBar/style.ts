import styled from 'styled-components';

export const SideBar = styled.div`
    color: #fafafa;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 5em;
    width: 10%;
    padding: 1em 1em 1em 0;
`;

export const Burger = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const AdditionalInfo = styled.div`
    display: flex;
    width: 150%;
    justify-content: flex-end;
    span {
        transform: rotate(90deg);
    }
`;

export const BottomLogo = styled.div`
    text-align: right;
`;