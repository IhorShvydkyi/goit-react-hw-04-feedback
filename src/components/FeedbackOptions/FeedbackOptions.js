import React from "react";
import { FeedbackOptionsStyle, FeedbackButton } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ onLeaveFeedback, state }) => {
  return (
    <FeedbackOptionsStyle>
      {Object.keys(state).map((key) => (
        <FeedbackButton
          type="button"
          id={key}
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </FeedbackButton>
      ))}
    </FeedbackOptionsStyle>
  );
};

export default FeedbackOptions;
