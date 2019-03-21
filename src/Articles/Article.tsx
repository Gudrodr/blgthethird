import * as React from 'react';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {ArticleUnit} from '../type';
import {RouteChildrenProps} from 'react-router';


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
        return <div>Loading...</div>
    }

    return (
        <ArticleStyled>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </ArticleStyled>
    )
}

export default Article;


/** styles below */

const ArticleStyled = styled.div`
    width: 80%;
    color: white;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    h1 {
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .1em;
    }

    p {
        font-weight: 200;
        letter-spacing: .1em;
        line-height: 1.5em;
    }
`;