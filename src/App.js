import "./App.css";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <div className="App">
      <Feedback />
    </div>
  );
}

export default App;

//----------------------------------------------------

// import Feedback from './components/Feedback/Feedback';
// import { Component } from 'react';
// // import s from './App.css';
// import Statistics from "./components/Statistics/Statistics";
// import Section from "./components/Section/Section";

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (e) => {
//     const targetId = e.target.name;
//     this.setState((prevState) => ({
//       [targetId]: prevState[targetId] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce(
//       (acc, element) => acc + Number(element),
//       0
//     );
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const good = this.state.good;
//     return total
//       ? Number(good * 100) /
//           Number(this.countTotalFeedback())
//       : 0;
//   };

//   render() {
//     const {
//       countTotalFeedback,
//       countPositiveFeedbackPercentage,
//       onLeaveFeedback,
//     } = this;
//     const countTotalFeedbackFn =
//       countTotalFeedback();
//     // console.log(this.state);
//     const options = Object.keys(this.state);
//     return (
//       <Section title="Please leave feedback">
//         <Feedback
//           onLeaveFeedback={onLeaveFeedback}
//           options={options}
//         />
//         {countTotalFeedbackFn ? (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={countTotalFeedbackFn}
//             countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Section
//             title={"There is no feedback"}
//           />
//         )}
//       </Section>
//     );
//   }
// }

// export default App;
