import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import PropTypes from 'prop-types';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, amount) => total + amount,
      0,
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const result = ((good * 100) / this.countTotalFeedback()).toFixed();
    return result;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFn = this.countTotalFeedback();
    const posPerc = this.countPositiveFeedbackPercentage();
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleLeaveFeedback}
        />

        {totalFn > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFn}
            positivePercentage={posPerc}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}
export default Feedback;

Feedback.propTypes = {
  state: PropTypes.objectOf(
    PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
    }),
  ),
};
