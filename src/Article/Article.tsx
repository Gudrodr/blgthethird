import * as React from 'react';
import { ArticleStyled, PreviewFrontTile, ArticleContent, ContentWrapper, ArticleLoading } from './style';
import { MainView, ArticleUnit } from '../type';

interface Props {
    currentView: MainView;
    data: ArticleUnit;
    onClick(): void;
}

class Article extends React.Component<Props> {
    render() {
        if (!this.props.data) {
            return (
                <ArticleLoading>
                    ....Loading
                </ArticleLoading>
            )
        }

        return (
            <ArticleStyled
                view={this.props.currentView}
            >
                <ContentWrapper
                    view={this.props.currentView}
                >
                    <PreviewFrontTile
                        view={this.props.currentView}
                        onClick={this.props.onClick}
                    >
                        {this.props.data.title}
                    </PreviewFrontTile>
                    <ArticleContent 
                        view={this.props.currentView}
                        onClick={this.props.onClick}
                    >
                        {this.props.data.body}
                    </ArticleContent>
                </ContentWrapper>   
            </ArticleStyled>
        )
    }
}

export default Article;