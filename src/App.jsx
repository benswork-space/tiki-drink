import { useState, useCallback } from 'react';
import { questions } from './data/questions';
import { drinks } from './data/drinks';
import { getResults } from './scoring/matcher';
import { useAudio } from './hooks/useAudio';
import LandingPage from './components/LandingPage';
import QuizContainer from './components/Quiz/QuizContainer';
import ResultsPage from './components/Results/ResultsPage';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [phase, setPhase] = useState('landing');
  const [results, setResults] = useState(null);
  const audio = useAudio();

  const handleStart = useCallback(() => {
    audio.play();
    setPhase('quiz');
  }, [audio]);

  const handleQuizComplete = useCallback((answers) => {
    const quizResults = getResults(answers, questions, drinks);
    setResults(quizResults);
    setPhase('results');
  }, []);

  const handleRetake = useCallback(() => {
    setResults(null);
    setPhase('quiz');
  }, []);

  return (
    <div className="app">
      <div className="app-content">
        {phase === 'landing' && (
          <LandingPage onStart={handleStart} />
        )}
        {phase === 'quiz' && (
          <QuizContainer
            questions={questions}
            onComplete={handleQuizComplete}
          />
        )}
        {phase === 'results' && results && (
          <ResultsPage
            results={results}
            onRetake={handleRetake}
          />
        )}
      </div>
      <AudioPlayer isPlaying={audio.isPlaying} onToggle={audio.toggle} />
    </div>
  );
}

export default App;
