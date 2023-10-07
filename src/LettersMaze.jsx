import { useState } from 'react';
import { LetterSequence } from './components/LetterSequence'
import { LetterMatrix } from './components/LetterMatrix';
import { matrix, wordsToGuess } from './data/sampleData';
import { WordGuess } from './components/WordGuess';

export const LettersMaze = () => {
  
  const [guessWord, setGuessWord] = useState('');
  const [clearAction, setClearAction] = useState(0);

  const onSubmitGuess = (event) => {
    event.preventDefault();    
  }

  const onClearSelections = () => {
    setGuessWord('');
    setClearAction((trigger) => trigger + 1);
  }

  return (
    <div className="bg-zinc-600 container mx-auto">
      <h1 className="text-3xl text-white mt-5">Letters Maze</h1>
      <div className="flex">
        <div>
          <LetterMatrix
            matrix={ matrix }
            onLetterAdd={ setGuessWord }
            clearAction={ clearAction }
          />
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
            <WordGuess word={ wordsToGuess[9][0] }></WordGuess>
            <div className="text-white mt-4 uppercase text-xs">1 de 8 letras</div>
            <WordGuess word={ wordsToGuess[8][0] }></WordGuess>
            <div className="text-white mt-4 uppercase text-xs">2 de 7 letras</div>
            <WordGuess word={ wordsToGuess[7][0] }></WordGuess>
            <WordGuess word={ wordsToGuess[7][1] }></WordGuess>
            <div className="text-white mt-4 uppercase text-xs">3 de 6 letras</div>
            <WordGuess word={ wordsToGuess[6][0] }></WordGuess>
            <WordGuess word={ wordsToGuess[6][1] }></WordGuess>
            <WordGuess word={ wordsToGuess[6][2] }></WordGuess>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="btn bg-green-600 text-white rounded px-3 py-2 mr-2 disabled:opacity-40"
          onClick={ onSubmitGuess }
          disabled={ guessWord.length < 1 }
          >Enviar
          </button>
        <button
          className="btn bg-red-600 text-white rounded px-3 py-2 disabled:opacity-40"
          disabled={ guessWord.length < 1 }
          onClick={ onClearSelections }
          >Limpiar
          </button>
      </div>
    </div>
  )
}
