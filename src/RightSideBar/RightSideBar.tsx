import * as React from 'react';
import styled from 'styled-components';
import { pics } from './../assets/index';

const RightSideBar = () => {
    return (
        <SideBar>
            <MainMenuButton>
                <div/>
            </MainMenuButton>
            {/* <AdditionalInfo>
                <span>
                    git or info here
                </span>
            </AdditionalInfo> */}
            <BottomLogo onClick={() => window.open('https://github.com/Gudrodr', '_blanc')} />
        </SideBar>
    )
}

export default RightSideBar;


/** styles below */

const SideBar = styled.div`
    color: #fafafa;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    min-width: 3em;
    width: 5%;
`;

const MainMenuButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 1em;
    cursor: pointer;

    div {
        width: 1.6em;
        height: .8em;
        border-top: 2px solid white;
        border-bottom: 2px solid white;

        @keyframes expand {
            from {
                height: 0;
                border-bottom: 0;
            } 
            50% {
                height: 0.125em;
                border-bottom: 2px solid white;
            }
            to {
                height: 0.5em;
                border-bottom: 2px solid white;
            }
        }
        animation: expand 0.05s linear;
    }

    :hover{
        div {
            @keyframes collapse {
                from {
                    height: 0.5em;
                    border-bottom: 2px solid white;
                } 
                50% {
                    height: 0.25em;
                    border-bottom: 2px solid white;
                }
                to {
                    height: 0;
                    border-bottom: 0;
                }
            }
            animation: collapse 0.05s linear;
            height: 0;
            border-bottom: 0;
        }
    }
`;

const AdditionalInfo = styled.div`
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

const BottomLogo = styled.div`
    width: 1em;
    height: 1em;
    background: url(${pics.githubLogo}), center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;

    transition: opacity .4s;

    :hover {
        opacity: .7;
    }
`;