'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';

export class Template extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <span>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavBar />
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}
