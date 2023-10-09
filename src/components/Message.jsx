import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from "react-icons/fa";

export const Message = ({ attempt }) => {

  const [ correctMessageDisplay, setCorrectMessageDisplay ] = useState(false);
  const [ incorrectMessageDisplay, setIncorrectMessageDisplay ] = useState(false);

  useEffect(() => {
    attempt.correct ? showCorrectMessage() : showIncorrectMessage();
  }, [attempt]);

  const showCorrectMessage = () => {
    setCorrectMessageDisplay(true);
    setTimeout(() => {
      setCorrectMessageDisplay(false);
    }, 1000)
  }

  const showIncorrectMessage = () => {
    setIncorrectMessageDisplay(true);
    setTimeout(() => {
      setIncorrectMessageDisplay(false);
    }, 1000)
  }
  

  return (
    <>
    <div className={ `absolute top-[200px] left-[200px] ${ correctMessageDisplay ? '' : 'hidden' }` }>
      <div className="flex mx-auto p-2 border border-slate-400 rounded bg-green-600 text-white text-center font-bold text-lg shadow-md">
        <FaCheck className="mt-1 mr-3 text-white" /> Palabra correcta
      </div>
    </div>
    <div className={ `absolute top-[200px] left-[200px] ${ incorrectMessageDisplay ? '' : 'hidden' }` }>
      <div className="flex mx-auto p-2 border border-slate-400 rounded bg-red-600 text-white text-center font-bold text-lg shadow-md">
        <FaTimes className="mt-1 mr-3 text-white" /> Palabra incorrecta
      </div>
    </div>
    </>
  )
}

Message.propTypes = {
  attempt: PropTypes.object.isRequired
}
