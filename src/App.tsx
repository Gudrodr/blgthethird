import * as React from 'react';
import styled from 'styled-components';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import RightSideBar from './RightSideBar/RightSideBar';
import { MainView, ArticleUnit } from './type';
import Article from './Article/Article';

interface State {
    currentView: MainView;
    articleIndex: number | undefined;
    articles: ArticleUnit[];
}

class App extends React.Component<{}, State> {
    state: State = {
        currentView: 'main',
        articleIndex: undefined,
        articles: []
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3001', {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                this.setState({articles: data.articles});
            })
    }

    private changeCurrentView = (view: MainView) => {
        this.setState({currentView: view})
    }

    render() {
        if (this.state.articles.length === 0) {
            return (
                <ArticleLoading>
                    ....Loading
                </ArticleLoading>
            )
        }

        return (
            <Application>
                <LeftSideBar
                    currentView={this.state.currentView}
                    articleIndex={this.state.articleIndex}
                    changeView={this.changeCurrentView}
                    articles={this.state.articles}
                    articleIndexChange={this.articleIndexChange}
                />

                {this.state.articleIndex !== undefined &&
                    <Article
                        currentView={this.state.currentView}
                        data={this.state.articles[this.state.articleIndex]}
                        onClick={this.viewChange}
                    />
                }
                
                <RightSideBar />
            </Application>
        )
    }

    private articleIndexChange = (index: number) => {
        this.setState({currentView: 'preview', articleIndex: index});
    }

    private viewChange = () => {
        this.setState({currentView: 'extended'})
    }
}

export default App;


/** styles below */

const ArticleLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

color: #999;
`;

const Application = styled.div`
    font-family: 'Raleway', sans-serif;

    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    background-color: #080F1E;
    padding: 2.5em;
    box-sizing: border-box;
`;