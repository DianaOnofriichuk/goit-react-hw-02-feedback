import React, { Component } from 'react';
import Buttons from './Buttons';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  onButtonClick = feedbackType => {
    this.setState(prevState => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
        total: prevState.total + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positiveFeedback: Math.round((prevState.good * 100) / prevState.total),
      };
    });
  };

  render() {
    return (
      <div className="feedbacks">
        <h1 className="title">Please leave feedback</h1>
        <Buttons
          onButtonClick={this.onButtonClick}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
        <h2 className="title">Statistics</h2>
        {this.state.total > 0 ? (
          <Statistics feedbacks={this.state} />
        ) : (
          <p className="statistic">No feedback given</p>
        )}
      </div>
    );
  }
}
