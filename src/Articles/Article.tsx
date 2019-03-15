import * as React from 'react';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {ArticleUnit} from '../type';
import {RouteChildrenProps} from 'react-router';
import {Link} from 'react-router-dom';


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
            <Link to='title_duo'>duo</Link>
            <p>{article.body}</p>
        </ArticleStyled>
    )
}

export default Article;


/** styles below */

const ArticleStyled = styled.div`
    display: block;
    color: white;
`;