import PropTypes from 'prop-types';
import { LetterBox } from './LetterBox';
import { useEffect, useState } from 'react';

export const LetterMatrix = ({ matrix, onLetterAdd, clearAction }) => {

  const [maze, setMaze] = useState(matrix);
  const [word, setWord] = useState('');
  const [lastPosition, setLastPosition] = useState();

  function isAdyacentToLastPosition(x, y) {
    return lastPosition && Math.abs(x - lastPosition.x) <= 1 && Math.abs(y - lastPosition.y) <= 1;
  }

  const isNotSelected = (x, y) => {
    return maze[x-1][y-1].selected === false;
  }

  const onLetterSelected = (event) => {

    if (word.length <= 8) {
      const position = event.currentTarget.getAttribute('aria-label');

      const x = parseInt(position / 10);
      const y = position % 10;

      if (!lastPosition || (isAdyacentToLastPosition(x, y) && isNotSelected(x, y))) {
        const updatedMaze = maze.map(
          row => row.map(
            letter => letter.id == position ? { ...letter, selected: true } : letter
          )
        );
  
        const newLetter = event.currentTarget.innerHTML;
  
        setMaze(updatedMaze);
        setWord( (word) => word + newLetter);
        setLastPosition({ x, y });
        onLetterAdd( (word) => word + newLetter);        
      }            
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
    setLastPosition(null);

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
 