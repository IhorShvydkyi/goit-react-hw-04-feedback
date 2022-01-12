import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (feedback) => {
    this.setState((prevState) => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalSum = Object.keys(this.state).reduce((sum, key) => {
      return sum + this.state[key];
    }, 0);
    return totalSum;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return positivePercentage;
  };

  render() {
    return (
      <div>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrement}
            state={this.state}
          />
          <h2>Statistics</h2>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
export default App;
