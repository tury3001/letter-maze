import { useState } from 'react';
import { LetterSequence } from './components/LetterSequence'
import { LetterMatrix } from './components/LetterMatrix';
import { matrix } from './data/sampleData';

export const LettersMaze = () => {
  
  const [maze, setMaze] = useState(matrix);

  const onLetterSelected = (event) => {
    const position = event.currentTarget.getAttribute('aria-label');
    const updatedMaze = maze.map(
      row => row.map(
        letter => letter.id == position ? { ...letter, selected: !letter.selected } : letter
      )
    );

    setMaze(updatedMaze);
  }

  const onClearSelections = () => {
    const updatedMaze = maze.map(
      row => row.map(
        letter => ({ ...letter, selected: false })
      )
    );
    setMaze(updatedMaze);
  }

  return (
    <>
      <div>
        <h1>Letters Maze</h1>
        <LetterMatrix matrix={ maze } onLetterSelected={ onLetterSelected } />
        <div className="mt-10 flex justify-center">
          <LetterSequence />
        </div>
        <div className="mt-10 flex justify-center">
          <button className="btn bg-slate-900 text-white rounded px-3 py-2" onClick={ onClearSelections }>Limpiar</button>
        </div>
      </div>
    </>
  )
}
