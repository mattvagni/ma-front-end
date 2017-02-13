import React, { Component } from 'react';

const ensureData = ({ dataCalls }) => WrappedComponent => class extends Component {
  static ensureData(props) {
    return Promise.all(dataCalls(props));
  }

  componentDidMount() {
    Promise.all(dataCalls(this.props))
  }

  render() {
    return (
      <WrappedComponent {...this.props} />
    );
  }
};

export default ensureData;
