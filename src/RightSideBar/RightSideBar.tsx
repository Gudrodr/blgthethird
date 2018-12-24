import * as React from 'react';
import { SideBar, Burger, AdditionalInfo, BottomLogo } from './style';

class RightSideBar extends React.Component {
    render() {
        return (
            <SideBar>
                <Burger>
                    =
                </Burger>
                <AdditionalInfo>
                    <span>
                        git or info here
                    </span>
                </AdditionalInfo>
                <BottomLogo>
                    git or logo here
                </BottomLogo>
            </SideBar>
        )
    }
}

export default RightSideBar;