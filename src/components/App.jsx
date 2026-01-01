import { useState } from 'react';

import Statistics from "./Statistics/Statistics";
import SectionTitle from "./SectionTitle/SectionTitle";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const handleFeedback = (type) => {
    switch (type) {
      case "good":
        setGood(prev => prev + 1);
        break;
      case "neutral":
        setNeutral(prev => prev + 1);
        break;
      case "bad":
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };
  // handleFeedback = (type) => {
  //   this.setState((prevState) => ({
  //     [type]: prevState[type] + 1,
  //   }));
  // };
  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  // countTotalFeedback() {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // }
  // countPositiveFeedbackPercentage() {
  //   const total = this.countTotalFeedback();
  //   if (total === 0) {
  //     return 0;
  //   }
  //   const percentage = (this.state.good / total) * 100;
  //   return Math.round(percentage);
  // }
  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const total = this.countTotalFeedback();
  //   const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <SectionTitle title = "Please leave Feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]}
            onLeaveFeedback={handleFeedback} />
        </SectionTitle>
        <SectionTitle title = "Statistics">
        {total > 0 ? (
          <Statistics
            good = {good}
            neutral= {neutral}
            bad = {bad}
            total = {total}
            positivePercentage = {positivePercentage} />
         
        ) : (
          <p>No feedback given</p>
          )}
            </SectionTitle>
      </div>
    );
  }


