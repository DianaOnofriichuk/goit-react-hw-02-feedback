import Buttons from './Buttons'
import Statistics from './Statistics'
import { useState } from 'react'

const App = () => {
  const [good, setGoodFeedback] = useState(0)
  const [neutral, setNeutralFeedback] = useState(0)
  const [bad, setBadFeedback] = useState(0)
  const [total, setTotalFeedback] = useState(0)
  const [positiveFeedback, setPositiveFeedback] = useState(0)

  const onButtonClick = (feedbackType) => {
    if (feedbackType === 'good') {
      setGoodFeedback(good + 1)
      setPositiveFeedback(Math.round(((good + 1) * 100) / (total + 1)))
    } else if (feedbackType === 'neutral') {
      setNeutralFeedback(neutral + 1)
      setPositiveFeedback(Math.round((good * 100) / (total + 1)))
    } else if (feedbackType === 'bad') {
      setBadFeedback(bad + 1)
      setPositiveFeedback(Math.round((good * 100) / (total + 1)))
    } else {
      return
    }
    setTotalFeedback(total + 1)
  }

  return (
    <div className="feedbacks">
      <h1 className="title">Please leave feedback</h1>
      <Buttons onButtonClick={onButtonClick} />
      <h2 className="title">Statistics</h2>
      {total > 0 ? (
        <Statistics
          feedbacks={{ good, neutral, bad, total, positiveFeedback }}
        />
      ) : (
        <p className="statistic">No feedback given</p>
      )}
    </div>
  )
}
export default App
