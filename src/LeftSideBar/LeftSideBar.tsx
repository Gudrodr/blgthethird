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
            <Menu>
                {props.articles && props.articles.map((item, index) =>
                    <MenuItem
                        key={index}
                        selected={index === props.articleIndex}
                        onClick={() => props.articleIndexChange(index)}
                    >
                        <span>{item.title}</span>
                    </MenuItem>
                )}
            </Menu>
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

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80%;
`;

const MenuItem = styled.div<{selected: boolean}>`
    position: relative;

    display: flex;
    align-items: center;
    margin-left: 2.5em;
    margin-top: 1em;
    margin-bottom: 1.1em;
    opacity: ${props => props.selected ? 1 : 0.6};

    transition: opacity 0.2s;

    span {
        font-size: 0.7rem;
        font-weight: 100;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        white-space: nowrap;

        width: 100%;
        cursor: pointer;
    }

    :before {
        content: '';
        position: absolute;
        left: -2.5em;

        width: 0.9em;
        height: 0.9em;
        border: 1px solid white;
        border-radius: 50%;
        opacity: ${props => props.selected ? 0 : 0.6};

        transition: opacity 0.3s;
    }

    :after {
        content: '';
        position: absolute;
        left: -2em;

        width: 0;
        height: 0.9em;
        border-right: 1px solid white;
        opacity: ${props => props.selected ? 1 : 0};

        transition: opacity 0.3s;
    }

    :hover {
        opacity: 1;
        
        :before {
            opacity: 0;
        }

        :after {
            opacity: 1;
        }
    }
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