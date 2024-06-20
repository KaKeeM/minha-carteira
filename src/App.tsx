import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import {ThemeProvider} from 'styled-components';
import lightTheme from './styles/themes/dark';
import Dashboard from './pages/Dashboard';

const App: React.FC  = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles/>
            <Layout>
                <Dashboard/>
            </Layout>
        </ThemeProvider>
    );
}


export default App;