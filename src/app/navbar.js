import React from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="row no-gutters">
                <div className="col-sm-12">
                    <ul className="nav nav-tabs nav-justified">
                        <li className='nav-item'><IndexLink className='nav-link' activeClassName='active' to='/'>Home</IndexLink></li>
                        <li className='nav-item'><IndexLink className='nav-link' activeClassName='active' to='/roles'>Roles</IndexLink></li>
                        <li className='nav-item'><IndexLink className='nav-link' activeClassName='active' to='/users'>Users</IndexLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}
