const Buttons = ({ onButtonClick, countPositiveFeedbackPercentage }) => {
  const onClick = e => {
    const feedbackType = e.target.textContent.toLowerCase();
    onButtonClick(feedbackType);
    countPositiveFeedbackPercentage();
  };

  return (
    <ul className="buttons-list" onClick={onClick}>
      <li>
        <button className="button">Good</button>
      </li>
      <li>
        <button className="button">Neutral</button>
      </li>
      <li>
        <button className="button">Bad</button>
      </li>
    </ul>
  );
};

export default Buttons;
