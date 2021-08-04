import React from 'react' ; 
import { Wrapper , Content , LogoImg } from "./Header.styles" ; 
import LOGO from "../../images/codeforces-svgrepo-com.svg" ; 
const Header = () => {
    return <Wrapper>
        <Content>
        <LogoImg src={LOGO}/>
        </Content>
        <Content>
        CODEFORCES COMPANION
        </Content>
    </Wrapper> ; 
}

export default Header ; 