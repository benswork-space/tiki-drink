import { useReducer } from 'react';

const initialState = {
  currentQuestionIndex: 0,
  answers: [],
  animationPhase: 'idle',
  isComplete: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'SELECT_ANSWER':
      return {
        ...state,
        answers: [
          ...state.answers,
          {
            questionId: action.questionId,
            selectedAnswerIndex: action.answerIndex,
          },
        ],
        animationPhase: 'exiting',
      };

    case 'ADVANCE_QUESTION': {
      const nextIndex = state.currentQuestionIndex + 1;
      const isComplete = nextIndex >= action.totalQuestions;
      return {
        ...state,
        currentQuestionIndex: isComplete ? state.currentQuestionIndex : nextIndex,
        animationPhase: isComplete ? 'idle' : 'entering',
        isComplete,
      };
    }

    case 'FINISH_ENTERING':
      return {
        ...state,
        animationPhase: 'idle',
      };

    case 'RESET':
      return { ...initialState };

    default:
      return state;
  }
}

export function useQuizState() {
  return useReducer(quizReducer, initialState);
}
