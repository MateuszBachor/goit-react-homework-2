import React from "react";
import styles from './Statistics.module.css';


export class Statistics extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0
      }
      incrementGood = () => this.setState({ good: this.state.good + 1});
      incrementNeutral = () => this.setState({ neutral: this.state.neutral + 1});
      incrementBad = () => this.setState({ bad: this.state.bad + 1});
      countTotalFeedback(){return this.total = this.state.bad + this.state.neutral+this.state.good};
      countPositiveFeedbackPercentage(){
        return ((this.state.good/this.total)*100).toFixed(0)
      };



      

render(){
    
    // let positiveFeedback = 0;
    
    // if(total>0){
    //  positiveFeedback = (this.state.good/total)*100;
     
    // }
    // else{
    //     positiveFeedback = "";
    // }
   
    return(
        
        
        <div className={styles.statistics}>
        <span>Please leave feedback</span>
        <div className={styles.btnContainer}>
    <button onClick={this.incrementGood}>Good</button>
    <button onClick={this.incrementNeutral}>Neutral</button>
    <button onClick={this.incrementBad}>Bad</button>
    </div>
        <span>Statistics</span>
        {this.countTotalFeedback() > 0 ? (
            <div className={styles.statistics}>
    <span>Good: {this.state.good}</span>
    <span>Neutral: {this.state.neutral}</span>
    <span>Bad: {this.state.bad}</span>
    <span>Total: {this.countTotalFeedback()}</span>
    <span>Positive feedback: {this.countPositiveFeedbackPercentage()}%</span>
    </div>
    ): (<span>No feedback given</span>)}
    </div>
   
    

    )
}

}


