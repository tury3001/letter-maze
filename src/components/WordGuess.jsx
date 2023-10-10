import { PropTypes } from 'prop-types';
import { FaQuestion, FaCheck } from "react-icons/fa";

export const WordGuess = ({ word, guessed = false }) => {

  const getWord = () => {

    if (guessed) {
      return word.split('').map( (c, i) => (
        <div key={ `char${i}` } className="border w-7 h-7 mr-1 border-slate-50 bg-green-600 text-white flex justify-center font-bold">
          { c.toUpperCase() }
        </div>
        )
      )
    } else {
      return word.split('').map( (c, i) => (
        <div key={ `char${i}` } className="border w-7 h-7 mr-1 border-slate-50 bg-gray-200 text-black flex justify-center font-bold">
          { i === 0 ?  c.toUpperCase() : ' ' }
        </div>
        )
      )
    }
  }

  const getIcon = () => {
    if (!guessed) {
      return (<FaQuestion className="mt-1 mr-3 text-white" />);
    } else {
      return (<FaCheck className="mt-1 mr-3 text-green-500" />);
    }
  }

  return (
    <>
      <div className="flex mt-2">
          { getIcon() }
          { getWord() }
      </div>
    </>
  )
}

WordGuess.propTypes = {
  word: PropTypes.string.isRequired,
  guessed: PropTypes.bool.isRequired
}