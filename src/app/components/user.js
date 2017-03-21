import React from 'react';


export class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: {}, roles: [], balances: [] };
    }


    render() {
        return (
            <div className='row'>
                User
            </div>
        );
    }
}
