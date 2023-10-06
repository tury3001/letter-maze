import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LetterFill } from './LetterFill';

export const LetterSequence = ({ clearAction, guessWord }) => {
  
  const [ sequence, setSequence ] = useState('');

  const onLetterAdded = (letter) => {
    setSequence( (sequence) => sequence + letter);
  }

  useEffect(() => {
    setSequence('');
  }, [clearAction]);

  useEffect(() => {
    setSequence( (sequence) => sequence + guessWord.slice(-1));
  }, [guessWord])
  

  return (
    <>
    {
      sequence.padEnd(9, '_').split('').map( (c, i) => (<LetterFill key={ `char${i}`} char={ c } />))
    }
    </>
  )
}

LetterSequence.propTypes = {
  clearAction: PropTypes.number.isRequired,
  guessWord: PropTypes.string.isRequired
}

