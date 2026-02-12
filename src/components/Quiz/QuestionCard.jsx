export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  categoryLabel,
  animationPhase,
  onSelectAnswer,
  selectedAnswerIndex,
}) {
  const cardClass = [
    'question-card',
    animationPhase === 'exiting' ? 'exiting' : '',
    animationPhase === 'entering' ? 'entering' : '',
  ].filter(Boolean).join(' ');

  const isDisabled = animationPhase !== 'idle';

  return (
    <div className={cardClass}>
      <div className="question-card__category-row">
        {question.emoji && (
          <span className="question-card__emoji">{question.emoji}</span>
        )}
        <span className="question-card__category">{categoryLabel}</span>
      </div>
      <div className="question-card__number">
        Question {questionNumber} of {totalQuestions}
      </div>
      <h2 className="question-card__text">{question.text}</h2>
      <div className="question-card__answers">
        {question.answers.map((answer, index) => (
          <button
            key={`${question.id}-${index}`}
            className={`answer-option ${selectedAnswerIndex === index ? 'selected' : ''}`}
            onClick={() => onSelectAnswer(index)}
            disabled={isDisabled}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
