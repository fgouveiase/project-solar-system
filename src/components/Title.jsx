import React, { Component } from 'react';
import Proptypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = { headline: Proptypes.string.isRequired };
