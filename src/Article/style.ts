import { MainView } from './../type';
import styled from 'styled-components';

export const ArticleLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    color: #999;
`;

export const ArticleStyled = styled.div<{view: MainView}>`
    display: flex;
    visibility: ${props => props.view === 'main' ? 'hidden' : 'visible'};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const ContentWrapper = styled.div<{view: MainView}>`
    position: relative;

    display: ${props => props.view === 'extended' ? 'flex' : 'block'};
    justify-content: center;
    width: 100%;
    max-width: 700px;
    height: ${props => props.view === 'extended' ? 'calc(100vh - 4em)' : '25em'};
    overflow-y: auto;
    padding: 2em 0;

    ::-webkit-scrollbar { 
        display: none; 
    }
`;

export const PreviewFrontTile = styled.div<{view: MainView}>`
    position: absolute;
    left: 1em;
    bottom: 1.5em;

    display: ${props => props.view === 'preview' ? 'block' : 'none'};
    width: 40%;
    min-height: 10em;
    max-height: 60%;
    background-color: beige;
    cursor: pointer;
    z-index: 2;
`;

export const ArticleContent = styled.div<{view: MainView}>`
    position: ${props => props.view === 'extended' ? 'static' : 'absolute'};
    top: 1.5em;
    right: 1em;

    width: 80%;
    min-height: 15em;
    height: 120vh;
    max-height: ${props => props.view === 'preview' ? '80%' : 'auto'};
    background-color: white;
    padding: 1em;
    cursor: ${props => props.view === 'preview' ? 'pointer' : 'auto'};
    z-index: 1;
`;