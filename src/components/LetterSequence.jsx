import { LetterFill } from './LetterFill';
import PropTypes from 'prop-types';

export const LetterSequence = ({ sequence = '' }) => {
  return (
    <>
    {
      sequence.padEnd(9, '_').split('').map( c => (<LetterFill char={ c } />))
    }
    </>
  )
}

LetterSequence.propTypes = {
  sequence: PropTypes.string.isRequired
}

