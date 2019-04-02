import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ArticleUnit } from '../type';
import { RouteChildrenProps } from 'react-router';
import { pics } from './../assets/index';
import { Link } from 'react-router-dom';
import * as ReactMarkdown from 'react-markdown';


const useFetch = (url: string) => {
    const [article, setArticle] = useState<ArticleUnit>();
    
    const fetchArticle = async () => await fetch(`http://127.0.0.1:3001${url}`, {method: 'GET', mode: 'cors'})
        .then(response => response.json())
        .then(data => {setArticle(data)});
    useEffect(() => {
        fetchArticle();
    }, [url]);
    return article;
};

const Article = (props: RouteChildrenProps) => {

    const article: ArticleUnit | undefined = useFetch(props.match!.url);

    if (!article) {
        return <ArticleLoading>Loading...</ArticleLoading>
    }

    return (
        <ArticleStyled>
            <TagAndDate>
                <span>{article.tags}</span>
                <span>{article.date}</span>
                <span>{article.author}</span>
            </TagAndDate>
            <h1>{article.title}</h1>
            <Share>
                <span>Поделиться</span>
                <ShareLinks>
                    <ShareTWTR/>
                    <ShareFB/>
                    <ShareDirect/>
                </ShareLinks>
            </Share>
            <div>
                <ReactMarkdown source={article.body} />
            </div>
            <Share>
                <span>Поделиться</span>
                <ShareLinks>
                    <ShareTWTR/>
                    <ShareFB/>
                    <ShareDirect/>
                </ShareLinks>
            </Share>
            <BackButton to='/'>
                К оглавлению
                <svg>
                    <line x1='0' y1='0' x2={`${buttonWidth}em`} y2='0'/>
                    <line x1={`-${buttonWidth}em`} y1='0' x2='0' y2='0'/>

                    <line x1={`${buttonWidth}em`} y1='5em' x2={`${buttonWidth}em`} y2='0'/>
                    <line x1={`${buttonWidth}em`} y1='0' x2={`${buttonWidth}em`} y2='-5em'/>

                    <line x1='0' y1='5em' x2={`${buttonWidth}em`} y2='5em'/>
                    <line x1={`${buttonWidth}em`} y1='5em' x2={`${buttonWidth * 2}em`} y2='5em'/>

                    <line x1='0' y1='5em' x2='0' y2='0'/>
                    <line x1='0' y1='10em' x2='0' y2='5em'/>
                </svg>
            </BackButton>
        </ArticleStyled>
    )
}

export default Article;


/** styles below */

const ArticleLoading = styled.div`
    color: white;
`;

const ArticleStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 60em;
    color: white;
    padding-top: 2.5em;
    padding-bottom: 2.5em;
    margin-top: -2.5em;
    margin-bottom: -2.5em;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    h1 {
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .1em;

        align-self: flex-start;
    }

    p {
        font-weight: 200;
        letter-spacing: .1em;
        line-height: 1.5em;

        align-self: flex-start;
    }
`;

const TagAndDate = styled.div`
    font-size: .7rem;
    letter-spacing: .1em;

    align-self: flex-start;
    opacity: .8;

    span {
        padding-right: .8em;
        padding-left: .8em;
        border-right: 1px solid rgba(211, 211, 211, .3);
        
        :first-child {
            padding-left: 0;
        }

        :last-child {
            border-right: none;
        }
    }
`;

const Share = styled.div`
    position: relative;

    font-size: .7rem;
    font-weight: 600;
    letter-spacing: .15em;
    text-transform: uppercase;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 1em;
    padding-bottom: 1em;

    :after {
        content: '';
        position: absolute;
        left: 10em;
        top: 50%;

        width: calc(100% - 28em);
        border-bottom: 1px solid rgba(211, 211, 211, .3);
    }
`;

const ShareLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 17em;

    :last-child {
        align-self: flex-end;
    }
`;

const ShareTWTR = styled.span`
    width: 5em;
    height: 5em;
    border: 1px solid rgba(211, 211, 211, .3);
    background-image: url(${pics.twtrLogo});
    background-position: center;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const ShareFB = styled.span`
    width: 5em;
    height: 5em;
    border: 1px solid rgba(211, 211, 211, .3);
    background-image: url(${pics.fbLogo});
    background-position: center;
    background-size: 32% 32%;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const ShareDirect = styled.span`
    width: 5em;
    height: 5em;
    border: 1px solid rgba(211, 211, 211, .3);
    background-image: url(${pics.chainLogo});
    background-position: center;
    background-size: 30% 30%;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const buttonWidth = 19;

const BackButton = styled(Link)`
    position: relative;

    font-size: .75rem;
    font-weight: 300;
    color: white;
    line-height: 5em;
    letter-spacing: .15em;
    text-transform: uppercase;
    text-decoration: none;
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${buttonWidth}em;
    height: 5em;
    background-color: transparent;
    margin: 3em auto;

    svg {
        position: absolute;
        top: 0;
        left: 0;

        width: ${buttonWidth}em;
        height: 5em;

        line {
            stroke-width: 1;
            fill: none;
            stroke-dasharray: ${buttonWidth}em;
            -webkit-transition: -webkit-transform .3s ease-out;
            transition: transform .3s ease-out;

            :nth-child(odd) {
                stroke: rgba(211, 211, 211, .6);
            }

            :nth-child(even) {
                stroke: white;
            }
        }
    }

    :hover {
        svg line {
            :first-child, :nth-child(2) {
                -webkit-transform: translateX(${buttonWidth}em);
                transform: translateX(${buttonWidth}em);
            }
            :nth-child(3), :nth-child(4) {
                -webkit-transform: translateY(5em);
                transform: translateY(5em);
            }
            :nth-child(5), :nth-child(6) {
                -webkit-transform: translateX(-${buttonWidth}em);
                transform: translateX(-${buttonWidth}em);
            }
            :nth-child(7), :nth-child(8) {
                -webkit-transform: translateY(-5em);
                transform: translateY(-5em);
            }
        }
    }
`;