import * as React from 'react';
import styled from 'styled-components';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import RightSideBar from './RightSideBar/RightSideBar';
import { MainView, ArticleUnit } from './type';
import ArticlesList from './Articles/ArticlesList';
import { Switch, Route } from 'react-router-dom';
import Article from './Articles/Article';
import Editor from './Tools/Editor';
import LoginScreen from './Tools/LoginScreen';

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

    render() {

        return (
            <Application>
                <LeftSideBar/>
                <Switch>
                    <Route path='/login' render={props => <LoginScreen {...props} />} />
                    <Route path='/write' component={Editor} />
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
    font-family: 'Montserrat', sans-serif;

    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    background-color: #080F1E;
    padding: 2.5em;
    box-sizing: border-box;

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;