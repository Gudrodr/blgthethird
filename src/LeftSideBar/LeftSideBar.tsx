import * as React from 'react';
import { SideBar, Header, Menu, Socials, Icon, MenuItem, MenuItemIcon, SocialIcon } from './style';

class LeftSideBar extends React.Component {
    render() {
        return (
            <SideBar>
                <Header>
                    <Icon />
                </Header>
                <Menu>
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