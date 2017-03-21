import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import { Provider, connect } from 'react-redux';
import store from './store';
import { Template } from './template';
import Home from './home';
import NotFound from './not-found';
import { RolePage } from './components/role';
import { UserPage } from './components/user';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Home} />
                        <Route path='/roles' component={RolePage} />
                        <Route path='/users' component={UserPage} />
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
