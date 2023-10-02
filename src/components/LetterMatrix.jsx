import PropTypes from 'prop-types';
import { LetterBox } from './LetterBox';

export const LetterMatrix = ({ matrix, onLetterSelected }) => {

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-[36rem]">
        <div className="flex flex-wrap">
        {
        matrix.map(        
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
  onLetterSelected: PropTypes.func.isRequired
}
 