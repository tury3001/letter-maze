import { useState } from 'react';
import { LetterSequence } from './components/LetterSequence'
import { LetterMatrix } from './components/LetterMatrix';
import { matrix, wordsData } from './data/sampleData';
import { WordGuess } from './components/WordGuess';
import { Message } from './components/Message';

export const LettersMaze = () => {
  
  const [guessWord, setGuessWord] = useState('');
  const [clearAction, setClearAction] = useState(0);
  const [message, setMessage] = useState({ q: 0, correct: false, text: '' });
  const [wordsToGuess, setWordsToGuess] = useState(wordsData);
  const [gameOver, setGameOver] = useState(true);

  const onSubmitGuess = (event) => {
    event.preventDefault();

    const wordToFind = wordsToGuess.find( wtg => wtg.word === guessWord.toLowerCase());
    
    setGuessWord('');
    setClearAction((trigger) => trigger + 1);

    if (wordToFind && wordToFind.guessed === false) {      
      setMessage( (attempt) => ({ q: attempt.q + 1, correct: true, text: 'Palabra correcta', interval: 1000 }));      
      setWordsToGuess( words => words.map( w => w.word === guessWord.toLowerCase() ? { ...w, guessed: true  } : w));
      checkGameOver();
    } else if (wordToFind && wordToFind.guessed === true) {      
      setMessage( (attempt) => ({ q: attempt.q + 1, correct: false, text: 'Palabra ya encontrada', interval: 1000 }));
    } else {
      setMessage( (attempt) => ({ q: attempt.q + 1, correct: false, text: 'Palabra incorrecta', interval: 1000  }));
    }
  }

  const checkGameOver = () => {
    if (wordsToGuess.filter( word => word.guessed === false).length === 1) {
      setGameOver(true);
      setMessage( (attempt) => ({ q: attempt.q + 1, correct: true, text: '¡Has ganado!' }));

    }
  }

  const onClearSelections = () => {
    setGuessWord('');
    setClearAction((trigger) => trigger + 1);
  }

  return (
    <div className="bg-slate-600 h-screen">
      <nav className="bg-slate-800 text-white flex justify-center">
        <h1 className="text-xl text-white text-center uppercase shadow py-4 tracking-wider">
          Letters Maze
        </h1>
      </nav>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="ml-10 mt-3">
            <div className="relative">
              <Message message={ message }></Message>
              <LetterMatrix
                matrix={ matrix }
                onLetterAdd={ setGuessWord }
                clearAction={ clearAction }
              />            
            </div>
            
            <div className="mt-10 flex justify-center">
              <LetterSequence
                clearAction={ clearAction }
                guessWord={ guessWord }
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col mt-10 container ml-10">
              <div className="text-white mt-4 uppercase text-xs">1 de 9 letras</div>
              <WordGuess word={ wordsToGuess[0].word } guessed={ wordsToGuess[0].guessed }></WordGuess>
              <div className="text-white mt-4 uppercase text-xs">1 de 8 letras</div>
              <WordGuess word={ wordsToGuess[1].word } guessed={ wordsToGuess[1].guessed }></WordGuess>
              <div className="text-white mt-4 uppercase text-xs">2 de 7 letras</div>
              <WordGuess word={ wordsToGuess[2].word } guessed={ wordsToGuess[2].guessed }></WordGuess>
              <WordGuess word={ wordsToGuess[3].word } guessed={ wordsToGuess[3].guessed }></WordGuess>
              <div className="text-white mt-4 uppercase text-xs">3 de 6 letras</div>
              <WordGuess word={ wordsToGuess[4].word } guessed={ wordsToGuess[4].guessed }></WordGuess>
              <WordGuess word={ wordsToGuess[5].word } guessed={ wordsToGuess[5].guessed }></WordGuess>
              <WordGuess word={ wordsToGuess[6].word } guessed={ wordsToGuess[6].guessed }></WordGuess>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            className="btn bg-emerald-600 text-white rounded-full px-8 py-2 mr-2 disabled:opacity-40 uppercase"
            onClick={ onSubmitGuess }
            disabled={ guessWord.length < 1 }
            >Enviar
            </button>
          <button
            className="btn bg-red-500 text-white rounded-full px-8 py-2 disabled:opacity-40 uppercase"
            disabled={ guessWord.length < 1 }
            onClick={ onClearSelections }
            >Limpiar
            </button>
        </div>
      </div>
    </div>
  )
}
