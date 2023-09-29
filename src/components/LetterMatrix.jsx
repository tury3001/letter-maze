import PropTypes from 'prop-types';
import { LetterBox } from './LetterBox';

export const LetterMatrix = ({ matrix }) => {

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-96">
        <div className="flex flex-wrap">
        {
        matrix.map(        
          row => row.map(
              ({ id, letter }) => (<LetterBox key={ id } letter={ letter } />)
            )
          )
        }
        </div>
      </div>
    </div>
  )
}

LetterMatrix.propTypes = {
  matrix: PropTypes.array.isRequired
}
 