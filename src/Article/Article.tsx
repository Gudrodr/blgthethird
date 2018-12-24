import * as React from 'react';
import { ArticleStyled, PreviewFrontTile, ArticleContent, ContentWrapper, ArticleLoading } from './style';
import { MainView, ArticleUnit } from '../type';

interface Props {
    currentView: MainView;
    data: ArticleUnit;
}

class Article extends React.Component<Props> {
    render() {
        console.log(!this.props.data);
        if (!this.props.data) {
            return (
                <ArticleLoading>
                    ...Loading
                </ArticleLoading>
            )
        }

        return (
            <ArticleStyled>
                <ContentWrapper>
                    <PreviewFrontTile>
                        {this.props.data.title}
                    </PreviewFrontTile>
                    <ArticleContent>
                        {this.props.data.body}
                    </ArticleContent>
                </ContentWrapper>   
            </ArticleStyled>
        )
    }
}

export default Article;