import React, { Component } from 'react';

class LazyLoad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        };
    }

    componentDidMount() {
        if (!this.state.isLoad && this.isInViewport(this.lazyLoadComponent)) {
            this.setState({
                isLoad: true
            });
        } else {
            document.addEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll = (event) => {
        event.preventDefault();
        if (!this.state.isLoad && this.isInViewport(this.lazyLoadComponent)) {
            this.setState({
                isLoad: true
            });
        }
    }

    isInViewport(element, offset = 0) {
        if (!element) return false;
        const top = element.getBoundingClientRect().top;
        return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
    }

    render() {
        const { isLoad } = this.state;

        return (
            <div ref={lazyLoadComponent => this.lazyLoadComponent = lazyLoadComponent} className="lazy-load">
                { isLoad ? this.props.children : null }
            </div>
        )
    }
}

export default LazyLoad;