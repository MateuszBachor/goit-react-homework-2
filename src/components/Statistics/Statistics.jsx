import React from 'react';
import styles from '../Statistics/Statistics.module.css';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, postivePercentage } = this.props;
    return (
      <div>
        <div className={styles.statisticsCnt}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Postive feedback: {postivePercentage}%</p>
        </div>
      </div>
    );
  }
}
export default Statistics;
