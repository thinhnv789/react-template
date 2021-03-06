import React, { PureComponent } from 'react';
import Loading from './components/Loading';

export default class AsyncLoader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    if(!this.state.Component) {
      this.props.moduleProvider().then( ({Component}) => this.setState({ Component }));
    }
  }

  render() {
    const { Component } = this.state;

    return (
      <div>
        {Component ? <Component /> : <Loading />}
      </div>
    );
  }
};