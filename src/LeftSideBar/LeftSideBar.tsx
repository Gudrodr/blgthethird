import * as React from 'react';
import { pics } from './../assets/index';
import styled from 'styled-components';
import { MainView, ArticleUnit } from '../type';


interface Props {
    currentView: MainView;
    articles: ArticleUnit[];
    articleIndex: number | undefined;
    changeView(view: string): void;
    articleIndexChange(index: number): void;
}

const LeftSideBar = (props: Props) => {
    return (
        <SideBar>
            <Header>
                <Logo/>
            </Header>
            <Socials>
                <FBIcon/>
                <LinkedIcon/>
                <SocialIcon/>
            </Socials>
        </SideBar>
    )
}

export default LeftSideBar;


/** styles below */

const SideBar = styled.div`
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 8em;
    width: 10%;
    background-color: transparent;
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const Logo = styled.span`
    width: 2.5em;
    height: 2.5em;
    background: url(${pics.catLogo}), center;
    background-size: contain;
    margin-top: -0.8em;
    margin-left: -0.22em;
`;

const Socials = styled.div`
    display: flex;
    width: 100%;
`;

const FBIcon = styled.span`
    width: 0.9em;
    height: 0.9em;
    background: url(${pics.fbLogo}), center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 1em;
    cursor: pointer;
`;

const LinkedIcon = styled.span`
    width: 0.9em;
    height: 0.9em;
    background: url(${pics.linkedLogo}), center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const SocialIcon = styled.span`
    width: 0.9em;
    height: 0.9em;
    visibility: hidden;
`;