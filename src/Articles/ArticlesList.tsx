import * as React from 'react';
import styled from 'styled-components';
import { ArticleUnit } from '../type';
import { Link } from 'react-router-dom';
import Article from './Article';

interface Props {
    articles: ArticleUnit[];
}

const ArticlesList = (props: Props) => {
    return (
        <ArticlesListStyled>
            <ArticlesFilter>
                <div/>
            </ArticlesFilter>
            {props.articles.map((item, index) => 
                <ArticlePreview
                    key={index}
                    to={`/article/${item.alias}`}
                >
                    <h1>{item.title}</h1>
                </ArticlePreview>
            )}
        </ArticlesListStyled>
    )
}

export default ArticlesList;


/** styles below */

const ArticlesListStyled = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 80%;
`;

const ArticlesFilter = styled.nav`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    div {
        height: 4em;
        min-width: 15em;
        width: 45%;
        max-width: 20em;
        background-color: gray;
    }
`;

const ArticlePreview = styled(Link)`
    color: white;
    text-decoration: none;
    text-transform: uppercase;

    height: 7em;
    min-width: 15em;
    width: 45%;
    max-width: 25em;
    background-color: pink;

    margin-left: 2.5%;
    margin-right: 2.5%;

    :nth-child(even) {
        margin-top: 1em;
        margin-bottom: 2em;
    }

    :nth-child(odd) {
        margin-top: -4em;
        margin-bottom: 6em;
    }
`;