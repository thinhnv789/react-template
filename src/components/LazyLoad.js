import React, { Component } from 'react';

class LazyLoad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        event.preventDefault();
        if (!this.state.isLoad && this.isInViewport(this.lazyLoadComponent)) {
            this.setState({
                isLoad: true
            }, () => {
                document.removeEventListener('scroll', this.handleScroll);
            });
        }
    }

    isInViewport(element, offset = 0) {
        if (!element) return false;
        const top = element.getBoundingClientRect().top;
        console.log('Topttt', top);
        console.log('height', window.innerHeight);
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