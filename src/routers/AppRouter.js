import React from 'react';
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom'
import { Header } from '../components/Header'
// import { ListViewPage } from '../components/ListViewPage'
import ListViewPage from '../components/ListViewPage'
// import { CalendarViewPage } from '../components/CalendarViewPage'
import CalendarViewPage from '../components/CalendarViewPage'
import { NotFoundPage } from '../components/NotFoundPage'

export const history = createHistory();

const AppRouter = () => (
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ListViewPage} exact={true} />
                    <Route path="/calendar-view" component={CalendarViewPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
);

export default AppRouter;