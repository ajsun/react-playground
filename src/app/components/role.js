import React from 'react';


export class RolePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { roles: [], role: null };
    }

    render() {
        return (
            <div className="row">
                Role
            </div>
        );
    }
}
