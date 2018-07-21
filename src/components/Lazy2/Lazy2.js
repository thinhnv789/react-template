import React, { Component } from 'react';

import './lazy2Style.css';

class Lazy2 extends Component {
    componentDidMount() {
        
    }

    render() {
        return (
            <div ref={lz2 => this.lz2 = lz2} className="lazy2">
                Lazy2
            </div>
        )
    }
}

export default Lazy2;