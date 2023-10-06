import PropTypes from 'prop-types';
import { LetterBox } from './LetterBox';
import { useEffect, useState } from 'react';

export const LetterMatrix = ({ matrix, onLetterAdd, clearAction }) => {

  const [maze, setMaze] = useState(matrix);
  const [word, setWord] = useState('');

  function onLetterSelected(event) {

    if (word.length <= 8) {
      const position = event.currentTarget.getAttribute('aria-label');
      const updatedMaze = maze.map(
        row => row.map(
          letter => letter.id == position ? { ...letter, selected: !letter.selected } : letter
        )
      );

      const newLetter = event.currentTarget.innerHTML;

      setMaze(updatedMaze);
      setWord( (word) => word + newLetter);
      onLetterAdd( (word) => word + newLetter);
    }
  }

  useEffect( () => {

    const updatedMaze = maze.map(
      row => row.map(
        letter => ({ ...letter, selected: false })
      )
    );
    setMaze(updatedMaze);
    setWord( () => '');

  }, [clearAction]);

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-[36rem]">
        <div className="flex flex-wrap">
        {
        maze.map(        
          row => row.map(
              ({ id, letter, selected }) => (
                <LetterBox
                  key={ id }
                  id={ id.toString() }
                  letter={ letter }
                  selected={ selected }
                  onLetterSelected={ onLetterSelected }
                />
              )
            )
          )
        }
        </div>
      </div>
    </div>
  )
}

LetterMatrix.propTypes = {
  matrix: PropTypes.array.isRequired,
  onLetterAdd: PropTypes.func.isRequired,
  clearAction: PropTypes.number.isRequired
}
 