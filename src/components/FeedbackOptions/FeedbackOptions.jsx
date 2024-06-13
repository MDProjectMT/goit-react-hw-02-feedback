const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option[0].toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
