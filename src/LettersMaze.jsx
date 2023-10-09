import { useState } from 'react';
import { LetterSequence } from './components/LetterSequence'
import { LetterMatrix } from './components/LetterMatrix';
import { matrix, wordsData } from './data/sampleData';
import { WordGuess } from './components/WordGuess';

export const LettersMaze = () => {
  
  const [guessWord, setGuessWord] = useState('');
  const [clearAction, setClearAction] = useState(0);
  const [wordsToGuess, setWordsToGuess] = useState(wordsData);

  const onSubmitGuess = (event) => {
    event.preventDefault();

    if (wordsToGuess.find( wtg => wtg.word === guessWord.toLowerCase())) {
      setGuessWord('');
      setClearAction((trigger) => trigger + 1);
      setWordsToGuess( words => words.map( w => w.word === guessWord.toLowerCase() ? { ...w, guessed: true  } : w));
    } else {
      console.log('Nop!');
    }
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
