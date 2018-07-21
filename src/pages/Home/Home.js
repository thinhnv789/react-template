import React, { Component } from 'react';
import LazyLoad from './../../components/LazyLoad';
import Lazy1 from './../../components/Lazy1/Lazy1';
import Lazy2 from './../../components/Lazy2/Lazy2';

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
                <Lazy1 />
                <LazyLoad>
                    <Lazy2 />
                </LazyLoad>
            </div>
        )
    }
}

export default Home;