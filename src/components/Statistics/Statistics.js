import React, { Component } from 'react';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <h3>Statistics</h3>

        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>

        <p>Total:{total}</p>
        <p>Positive feedback:{total && positivePercentage}%</p>
      </div>
    );
  }
}
