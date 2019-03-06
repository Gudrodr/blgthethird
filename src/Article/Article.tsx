import * as React from 'react';
import styled from 'styled-components';
import { MainView, ArticleUnit } from '../type';

interface Props {
    currentView: MainView;
    data: ArticleUnit;
    onClick(): void;
}

const Article = (props: Props) => {
    return (
        <ArticleStyled
            view={props.currentView}
        >
            <ContentWrapper
                view={props.currentView}
            >
                <PreviewFrontTile
                    view={props.currentView}
                    onClick={props.onClick}
                >
                    {props.data.title}
                </PreviewFrontTile>
                <ArticleContent 
                    view={props.currentView}
                >
                    {props.data.body}
                </ArticleContent>
            </ContentWrapper>   
        </ArticleStyled>
    )
}

export default Article;


/** styles below */

const ArticleStyled = styled.div<{view: MainView}>`
    display: flex;
    visibility: ${props => props.view === 'main' ? 'hidden' : 'visible'};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const ContentWrapper = styled.div<{view: MainView}>`
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

const PreviewFrontTile = styled.div<{view: MainView}>`
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

const ArticleContent = styled.div<{view: MainView}>`
    position: ${props => props.view === 'extended' ? 'static' : 'absolute'};
    top: 1.5em;
    right: 1em;

    width: 80%;
    min-height: 15em;
    height: 120vh;
    max-height: ${props => props.view === 'preview' ? '80%' : 'auto'};
    background-color: white;
    padding: 1em;
    z-index: 1;
`;