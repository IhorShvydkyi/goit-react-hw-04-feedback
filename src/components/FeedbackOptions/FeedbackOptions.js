import React from "react";
import { FeedbackOptionsStyle, FeedbackButton } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ onLeaveFeedback, good, bad, neutral }) => {
  const state = { good, bad, neutral };
  return (
    <FeedbackOptionsStyle>
      {Object.keys(state).map((key) => (
        <FeedbackButton
          type="button"
          id={key}
          key={key}
          onClick={onLeaveFeedback}
        >
          {key}
        </FeedbackButton>
      ))}
    </FeedbackOptionsStyle>
  );
};

export default FeedbackOptions;
