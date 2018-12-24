import * as React from 'react';
import { Application } from './style';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import RightSideBar from './RightSideBar/RightSideBar';
import { MainView, ArticleUnit } from './type';
import Article from './Article/Article';

interface State {
    currentView: MainView;
    currentIndex: number;
    articles: ArticleUnit[];
}

class App extends React.Component<{}, State> {

    constructor(props) {
        super(props);

        this.state = {
            currentView: 'preview',
            currentIndex: 0,
            articles: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3000', {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .then(data => this.setState({articles: data.articles}))
    }

    render() {
        console.log(this.state.articles);
        return (
            <Application>
                <LeftSideBar />
                {this.state.currentView !== 'main' &&
                    <Article
                        currentView={this.state.currentView}
                        data={this.state.articles[this.state.currentIndex]}
                    /> ||
                    <div />
                }
                <RightSideBar />
            </Application>
        )
    }
}

export default App;