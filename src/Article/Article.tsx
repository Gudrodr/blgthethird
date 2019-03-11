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
        <ArticleStyled>
              
        </ArticleStyled>
    )
}

export default Article;


/** styles below */

const ArticleStyled = styled.div`
    display: block;
`;