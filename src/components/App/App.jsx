import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import styles from 'components/Statistics/Statistics.module.css';
import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increment = state => {
    this.setState({ ...this.state, [state]: this.state[state] + 1 });
  };
  countTotalFeedback() {
    return (this.total = this.state.bad + this.state.neutral + this.state.good);
  }
  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.total) * 100).toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.increment} />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              postivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;
