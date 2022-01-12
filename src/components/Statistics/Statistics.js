const Statistics = ({
  countPositiveFeedbackPercentage,
  countTotalFeedback,
  good,
  neutral,
  bad,
}) => {
  console.log(countPositiveFeedbackPercentage);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback}</p>
      <p>Positive feedbacks: {countPositiveFeedbackPercentage} %</p>
    </div>
  );
};

export default Statistics;
