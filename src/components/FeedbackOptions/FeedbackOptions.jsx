import React from 'react';
import styles from './FeedbackOptions.module.css';

export class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        <div>
          <button
            className={styles.statisticsBtn}
            onClick={() => {
              onLeaveFeedback(options[0]);
            }}
          >
            Good
          </button>
          <button
            className={styles.statisticsBtn}
            onClick={() => {
              onLeaveFeedback(options[1]);
            }}
          >
            Neutral
          </button>
          <button
            className={styles.statisticsBtn}
            onClick={() => {
              onLeaveFeedback(options[2]);
            }}
          >
            Bad
          </button>
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
