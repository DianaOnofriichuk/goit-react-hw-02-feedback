const Statistics = ({
  feedbacks: { good, neutral, bad, total, positiveFeedback },
}) => {
  return (
    <ul className="statistic">
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>PositiveFeedback: {positiveFeedback}%</li>
    </ul>
  );
};

export default Statistics;
