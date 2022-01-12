import styled from "@emotion/styled";

export const FeedbackOptionsStyle = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const FeedbackButton = styled.button`
  display: flex;
  overflow: hidden;

  margin: 15px;
  padding: 5px 5px;

  cursor: pointer;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;

  color: #fff;
  background-color: #416dea;
  border: 0 none;
  border-radius: 36px;

  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;

  justify-content: center;
  align-items: center;
  flex: 0 0 160px;
  box-shadow: 2px 5px 10px #e4e4e4;
  &:hover {
    transition: all 150ms linear;

    opacity: 0.85;
  }
  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
  }
`;
