import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './headerStyle.css';

class HeaderDesktop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navItems } = this.props;

        return (
            <header className="header-desktop">
                <div className="container">
                    {/* <a href="/">Test</a> */}
                    <nav>
                        <ul>
                            {
                                navItems.map((item, index) => {
                                    return (
                                        <li key={index} className={`nav-item${(this.props.location.pathname === item.link) ? ' active' : ''}`}>
                                            <Link to={item.link}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

HeaderDesktop.defaultProps = {
    navItems: []
}

export default withRouter(HeaderDesktop);