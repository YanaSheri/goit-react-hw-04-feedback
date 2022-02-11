import { useState } from "react";
// import second from 'react'
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";

export default function Feedback() {
    
    // const [good, setGood] = useState(0);
    // const [neutral, setNeutral] = useState(0);
    // const [bad, setBad] = useState(0);

    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const { good, neutral, bad } = state;

    // state = {
    //     good: 0,
    //     neutral: 0,
    //     bad: 0
    // }

    // const countTotalFeedback = () => {
    //     const total = good + neutral + bad;
    //     return total;
    // }
    const countTotalFeedback = () => {
        return good + neutral + bad;
    }
    
    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (!total) {
            return 0;
        }
        const percent = (good / total) * 100;
        return percent.toFixed();
    }

    const onLeaveFeedback = (key) => {
        console.log('key :>> ', key);
        setState(prevState => {
            const value = prevState[key];
            // console.log('value :>> ', value);
            return {
                ...prevState,
                [key]: value + 1
            }
        })
    }
    
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    const options = Object.keys({ good, neutral, bad });

    return (
        <>
            <Section title="Leave Feedback">
                <FeedbackOptions options={options} onLeaveFeedback={ onLeaveFeedback }/>
            </Section>
            <Section title="Statistics">
                {Boolean(total) && <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={ positivePercentage}/>}
                {!total && <Notification message="There is no feedback" />}
            </Section>
        </>
    )
}

// export default Feedback;

//----------------------------------------------------------------
// import { Component } from "react";
// import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
// import Notification from "../Notification/Notification";
// import Section from "../Section/Section";
// import Statistics from "../Statistics/Statistics";

// class Feedback extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }

//     countTotalFeedback() {
//         const total = this.state.good + this.state.neutral + this.state.bad;
//         return total;
//     }
    
//     countPositiveFeedbackPercentage() {
//         const total = this.countTotalFeedback();
//         if (!total) {
//             return 0;
//         }
//         const { good } = this.state;
//         const percent = (good / total) * 100;
//         return percent.toFixed();
//     }

//     onLeaveFeedback = (key) => {
//         this.setState(prevSate => {
//             const value = prevSate[key];
//             return {
//                 [key]: value + 1
//             }
//         })
//     }
    
//     render() {
//         const total = this.countTotalFeedback();
//         const positivePercentage = this.countPositiveFeedbackPercentage();
//         const { good, neutral, bad } = this.state;
//         const options = Object.keys(this.state);

//         return (
//             <>
//                 <Section title="Leave Feedback">
//                     <FeedbackOptions options={options} onLeaveFeedback={ this.onLeaveFeedback }/>
//                 </Section>
//                 <Section title="Statistics">
//                     {Boolean(total) && <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={ positivePercentage}/>}
//                     {!total && <Notification message="There is no feedback" />}
//                 </Section>
//             </>
//         )
//     }
// }

// export default Feedback;