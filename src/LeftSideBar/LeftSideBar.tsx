import * as React from 'react';
import { SideBar, Header, Menu, Socials, Icon, MenuItem, MenuItemIcon, SocialIcon } from './style';
import { MainView, ArticleUnit } from '../type';

interface Props {
    currentView: MainView;
    articles: ArticleUnit[];
    changeView(view: string): void;
    articleIndexChange(index: number): void;
}

class LeftSideBar extends React.Component<Props> {
    render() {
        return (
            <SideBar>
                <Header>
                    <Icon />
                </Header>
                <Menu>
                    <MenuItem
                        onClick={() => this.props.changeView('main')}
                    >
                        <MenuItemIcon />
                        <p>main view</p>
                    </MenuItem>
                    <MenuItem
                        onClick={() => this.props.changeView('preview')}
                    >
                        <MenuItemIcon />
                        <p>preview</p>
                    </MenuItem>
                    <MenuItem
                        onClick={() => this.props.changeView('extended')}
                    >
                        <MenuItemIcon />
                        <p>extended</p>
                    </MenuItem>
                    {this.props.articles && this.props.articles.map((item, index) =>
                        <MenuItem 
                            onClick={() => this.props.articleIndexChange(index)}
                        >
                            <MenuItemIcon />
                            <p>{item.title}</p>
                        </MenuItem>
                    )}
                </Menu>
                <Socials>
                    <SocialIcon>
                        FB
                    </SocialIcon>
                    <SocialIcon>
                        TW
                    </SocialIcon>
                    <SocialIcon>
                        INS
                    </SocialIcon>
                </Socials>
            </SideBar>
        )
    }
}

export default LeftSideBar;