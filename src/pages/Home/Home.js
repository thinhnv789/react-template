import React, { Component } from 'react';

import './homeStyle.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="home-page">
                <h1> Home Page </h1>
            </div>
        )
    }
}

export default Home;