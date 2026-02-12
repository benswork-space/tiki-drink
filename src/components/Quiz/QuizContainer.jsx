import { useEffect, useRef, useCallback } from 'react';
import { useQuizState } from '../../hooks/useQuizState';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';

export default function QuizContainer({ questions, onComplete }) {
  const [state, dispatch] = useQuizState();
  const timeoutRef = useRef(null);
  const rafRef = useRef(null);

  const currentQuestion = questions[state.currentQuestionIndex];

  const handleSelectAnswer = useCallback((answerIndex) => {
    if (state.animationPhase !== 'idle') return;

    dispatch({
      type: 'SELECT_ANSWER',
      questionId: currentQuestion.id,
      answerIndex,
    });

    timeoutRef.current = setTimeout(() => {
      dispatch({
        type: 'ADVANCE_QUESTION',
        totalQuestions: questions.length,
      });

      rafRef.current = requestAnimationFrame(() => {
        dispatch({ type: 'FINISH_ENTERING' });
      });
    }, 500);
  }, [state.animationPhase, currentQuestion, questions.length, dispatch]);

  useEffect(() => {
    if (state.isComplete) {
      onComplete(state.answers);
    }
  }, [state.isComplete, state.answers, onComplete]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Rotating tiki decorations that change with each question
  const tikiSets = [
    ['\u{1F334}', '\u{1F525}', '\u{1F334}'],
    ['\u{1F965}', '\u{1F5FF}', '\u{1F943}'],
    ['\u{1F30A}', '\u{1F41A}', '\u{1F3D6}'],
    ['\u{1F34D}', '\u{2728}', '\u{1F378}'],
    ['\u{1F525}', '\u{1F3B6}', '\u{1F525}'],
  ];
  const currentSet = tikiSets[state.currentQuestionIndex % tikiSets.length];

  return (
    <div className="quiz-container">
      <div className="quiz-tiki-decor">
        <span className="quiz-tiki-decor__item decor-sway">{currentSet[0]}</span>
        <span className="quiz-tiki-decor__item decor-hula">{currentSet[1]}</span>
        <span className="quiz-tiki-decor__item decor-sway">{currentSet[2]}</span>
      </div>
      <ProgressBar
        current={state.currentQuestionIndex + 1}
        total={questions.length}
      />
      <div className="question-card-wrapper">
        <QuestionCard
          question={currentQuestion}
          questionNumber={state.currentQuestionIndex + 1}
          totalQuestions={questions.length}
          categoryLabel={currentQuestion.categoryLabel}
          animationPhase={state.animationPhase}
          onSelectAnswer={handleSelectAnswer}
          selectedAnswerIndex={
            state.animationPhase === 'exiting'
              ? state.answers[state.answers.length - 1]?.selectedAnswerIndex
              : null
          }
        />
      </div>
    </div>
  );
}
