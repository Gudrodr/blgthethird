import { pics } from './../assets/index';
import styled from 'styled-components';

export const SideBar = styled.div`
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 8em;
    width: 10%;
    background-color: transparent;
    padding: 1em 0 1em 1em;
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

export const Icon = styled.span`
    width: 3.125em;
    height: 3.125em;
    background: url(${pics.catLogo}), center;
    background-size: contain;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuItem = styled.div`
    cursor: pointer;
`;

export const MenuItemIcon = styled.span`
    width: 1em;
    height: 1em;
    background-color: beige;
`;

export const Socials = styled.div`
    display: flex;
    width: 100%;
`;

export const FBIcon = styled.span`
    width: 1em;
    height: 1em;
    background: url(${pics.fbLogo}), center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 1em;
`;

export const LinkedIcon = styled.span`
    width: 1em;
    height: 1em;
    background: url(${pics.linkedLogo}), center;
    background-size: contain;
`;

export const SocialIcon = styled.span`
    width: 1em;
    height: 1em;
    visibility: hidden;
`;