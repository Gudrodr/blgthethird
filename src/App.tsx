import * as React from 'react';
import styled from 'styled-components';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import RightSideBar from './RightSideBar/RightSideBar';
import {MainView, ArticleUnit} from './type';
import ArticlesList from './Articles/ArticlesList';
import {Switch, Route} from 'react-router-dom';
import Article from './Articles/Article';

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

        return (
            <Application>
                <LeftSideBar/>
                <Switch>
                    <Route path='/article/:alias' render={props => <Article {...props} />} />
                    <Route path='/' render={() => 
                        this.state.articles.length === 0 &&
                            <ArticleLoading>
                                ....Loading
                            </ArticleLoading> ||
                            <ArticlesList
                                articles={this.state.articles}
                            />
                    }/>
                </Switch>
                <RightSideBar/>
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

const Application = styled.main`
    @font-face {
        font-family: 'Raleway', sans-serif;
        src: url('./assets/fonts/Raleway-Black-Italic.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Black.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Bold-Italic.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Bold.ttf') format('ttf'),
             url('./assets/fonts/Raleway-ExtraBold-Italic.ttf') format('ttf'),
             url('./assets/fonts/Raleway-ExtraBold.ttf') format('ttf'),
             url('./assets/fonts/Raleway-ExtraLight-Italic.ttf') format('ttf'),
             url('./assets/fonts/Raleway-ExtraLight.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Light-Italic.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Light.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Medium-Italic.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Medium.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Regular-Italic.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Regular.ttf') format('ttf'),
             url('./assets/fonts/Raleway-SemiBold-Italic.ttf') format('ttf'),
             url('./assets/fonts/Raleway-SemiBold.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Thin-Italic.ttf') format('ttf'),
             url('./assets/fonts/Raleway-Thin.ttf') format('ttf');
    }
    font-family: 'Raleway', sans-serif;

    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    background-color: #080F1E;
    padding: 2.5em;
    box-sizing: border-box;
`;