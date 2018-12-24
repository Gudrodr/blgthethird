import styled from 'styled-components';

export const SideBar = styled.div`
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 12.5em;
    width: 15%;
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
    background-color: beige;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuItem = styled.div`
    
`;

export const MenuItemIcon = styled.span`
    width: 1em;
    height: 1em;
    background-color: beige;
`;

export const Socials = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const SocialIcon = styled.span`
    width: 2em;
    height: 2em;
    background-color: beige;
`;