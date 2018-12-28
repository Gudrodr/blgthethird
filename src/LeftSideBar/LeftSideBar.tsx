import * as React from 'react';
import { SideBar, Header, Menu, Socials, Icon, MenuItem, MenuItemIcon, SocialIcon } from './style';
import { MainView } from '../type';

interface Props {
    currentView: MainView;
    changeView(view: string): void;
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
                    <MenuItem>
                        <MenuItemIcon />
                        <p>menu item text</p>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemIcon />
                        <p>menu item text</p>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemIcon />
                        <p>menu item text</p>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemIcon />
                        <p>menu item text</p>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemIcon />
                        <p>menu item text</p>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemIcon />
                        <p>menu item text</p>
                    </MenuItem>
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