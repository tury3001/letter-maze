import { useState } from 'react';
import { LetterSequence } from './components/LetterSequence'
import { LetterMatrix } from './components/LetterMatrix';
import { matrix } from './data/sampleData';
import { WordGuess } from './components/WordGuess';

export const LettersMaze = () => {
  
  const [guessWord, setGuessWord] = useState('');
  const [clearAction, setClearAction] = useState(0);

  const onSubmitGuess = (event) => {
    event.preventDefault();
  }

  const onClearSelections = () => {
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
            <WordGuess word="asteroide"></WordGuess>
            <div className="text-white mt-4 uppercase text-xs">1 de 8 letras</div>
            <WordGuess word="masacote"></WordGuess>
            <div className="text-white mt-4 uppercase text-xs">2 de 7 letras</div>
            <WordGuess word="mandril"></WordGuess>
            <WordGuess word="clavija"></WordGuess>
            <div className="text-white mt-4 uppercase text-xs">3 de 6 letras</div>
            <WordGuess word="pureza"></WordGuess>
            <WordGuess word="utopia"></WordGuess>
            <WordGuess word="camara"></WordGuess>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="btn bg-green-600 text-white rounded px-3 py-2 mr-2" onClick={ onSubmitGuess }>Enviar</button>
        <button className="btn bg-red-600 text-white rounded px-3 py-2" onClick={ onClearSelections }>Limpiar</button>
      </div>
    </div>
  )
}
