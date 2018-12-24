import styled from 'styled-components';

export const SideBar = styled.div`
    color: #fafafa;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 12.5em;
    width: 10%;
`;

export const Burger = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 1em;
`;

export const AdditionalInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    span {
        transform: rotate(90deg);
    }
`;

export const BottomLogo = styled.div`
    text-align: right;
    padding: 0 1em 1em 0;
`;