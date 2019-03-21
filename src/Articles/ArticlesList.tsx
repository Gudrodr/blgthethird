import * as React from 'react';
import styled from 'styled-components';
import {ArticleUnit} from '../type';
import {Link} from 'react-router-dom';

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
                    <img />
                    <h1>{index}</h1>
                    <TagAndDate>
                        <span>tag here</span>
                        <span>2019.02.24</span>
                    </TagAndDate>
                    <Title>{item.title}</Title>
                    <StartReading>Читать</StartReading>
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
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
    padding-top: 4em;
    padding-right: 1em;
    padding-left: 1em;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 821px) {
        justify-content: center;
        padding-top: 1em;
    }
`;

const ArticlesFilter = styled.nav`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    div {
        height: 4em;
        min-width: 15em;
        width: 46%;
        max-width: 20em;
        background-color: transparent;
    }
`;

const StartReading = styled.span`
    position: relative;

    font-size: .8rem;
    transition: all .35s;

    :after {
        content: '';
        position: absolute;
        right: -80%;
        top: 50%;

        display: block;
        width: 3em;
        border-bottom: 1px solid white;
        transition: all .35s ease-out;
    }
`;

const ArticlePreview = styled(Link)`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .12rem;

    /* height: 7em; */
    min-width: 15em;
    width: 46%;

    :nth-child(even) {
        margin: 1em 3% 2em 1%;
    }

    :nth-child(odd) {
        margin: -4em 1% 6em 3%;
    }

    img {
        height: 5em;
        width: 100%;
        background-color: gray;
    }

    h1 {
        text-align: right;
        font-size: 3.5rem;
        font-weight: 500;

        padding-right: .3em;
        margin-top: -.65em;
        margin-bottom: 0;
    }

    :hover ${StartReading} {
        margin-left: .8em;

        :after {
            right: -5%;

            width: 5.5em;
        }
    }

    @media (max-width: 821px) {
        width: 90%;

        :nth-child(even), :nth-child(odd) {
            margin: 1em 2.5% 2em 2.5%;
        }
    }
`;

const TagAndDate = styled.div`
    font-size: .7rem;
    color: lightgray;
    opacity: .6;
    margin-top: -1.7em;

    span {
        :first-child {
            text-transform: capitalize;

            margin-right: 1em;
        }
    }
`;

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: 400;

    margin: .6em .5em;
`;