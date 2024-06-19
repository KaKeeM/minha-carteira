import React from "react";
import { Grid} from './styles'
import MainHeader from "../MainHeader";
import Content from "../Content";
import Aside from "../Aside";

//FC é functional componente : => componente funcional
const Layout: React.FC  = () => {
    return (
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content/>
        </Grid>
    );
}

export default Layout;

