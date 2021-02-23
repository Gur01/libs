import { Layout, PageHeader } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import styled from 'styled-components';
import List from './pages/List';
import ListByRegion from './pages/ListByRegion';

const { Content } = Layout;

const App = () => {
    const [title, seTitle] = useState("");

    return (
        <StyledLayout>
            <PageHeader title={`Найди библиотеку ${title? "в " + title: ''}` }/>
            <StyledContent>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <List />
                        </Route>
                        <Route path="/list-by-region/:id">
                            <ListByRegion setTitle={seTitle}/>
                        </Route>
                    </Switch>
                </Router>
            </StyledContent>
        </StyledLayout>
    );
};

const StyledLayout = styled(Layout)`
    display: flex;
    height: 100vh;
`;

const StyledContent = styled(Content)`
    flex-grow: 1;
`;

export default App;
