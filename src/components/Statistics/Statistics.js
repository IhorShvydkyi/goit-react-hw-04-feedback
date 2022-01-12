import PropTypes from "prop-types";

import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const totalSum = total();

  const positivePercentageSum = positivePercentage();

  return (
    <div>
      {totalSum ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalSum}</p>
          <p>Positive feedbacks: {positivePercentageSum} %</p>
        </>
      ) : (
        <div>
          <Notification message="This is not a feedback" />
        </div>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentageSum: PropTypes.func,
};

export default Statistics;
