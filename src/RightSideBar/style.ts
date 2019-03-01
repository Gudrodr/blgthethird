import styled from 'styled-components';
import { pics } from './../assets/index';

export const SideBar = styled.div`
    color: #fafafa;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    min-width: 5em;
    width: 10%;
    padding: 1em 1em 1em 0;
`;

export const Burger = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const AdditionalInfo = styled.div`
    position: relative;
    display: flex;
    height: 1em;
    justify-content: flex-end;
    span {
        position: absolute;
        left: calc(0px + 1em);

        width: 8em;
        transform: rotate(90deg);
    }
`;

export const BottomLogo = styled.div`
    width: 1em;
    height: 1em;
    background: url(${pics.githubLogo}), center;
    background-size: contain;
    background-repeat: no-repeat;
`;