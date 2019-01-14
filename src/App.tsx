import * as React from 'react';
import { Application } from './style';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import RightSideBar from './RightSideBar/RightSideBar';
import { MainView, ArticleUnit } from './type';
import Article from './Article/Article';

interface State {
    currentView: MainView;
    articleIndex: number;
    articles: ArticleUnit[];
}

class App extends React.Component<{}, State> {
    state: State = {
        currentView: 'main',
        articleIndex: 0,
        articles: []
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3000', {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .then(data => this.setState({articles: data}))
    }

    private changeCurrentView = (view: MainView) => {
        this.setState({currentView: view})
    }

    render() {

        return (
            <Application>
                <LeftSideBar
                    currentView={this.state.currentView}
                    changeView={this.changeCurrentView}
                    articles={this.state.articles}
                    articleIndexChange={this.articleIndexChange}
                />

                <Article
                    currentView={this.state.currentView}
                    data={this.state.articles && this.state.articles[this.state.articleIndex]}
                />
                
                <RightSideBar />
            </Application>
        )
    }

    private articleIndexChange = (index: number) => {
        this.setState({articleIndex: index});
    }
}

export default App;