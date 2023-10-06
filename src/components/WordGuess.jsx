import { PropTypes } from 'prop-types';
import { FaQuestion } from "react-icons/fa";

export const WordGuess = ({ word }) => {
  return (
    <>
      <div className="flex mt-2">
      <div className="w-7 h-7 mr-2 flex justify-center text-white"><FaQuestion className="mt-1"/></div>
      { word.split('').map( (c, i) => (
        <div key={ `char${i}` } className="border w-7 h-7 mr-1 border-slate-50 bg-gray-100 flex justify-center font-bold">
          { i === 0 ? c.toUpperCase() : '' }
        </div>
      ))}
      </div>
    </>
  )
}

WordGuess.propTypes = {
  word: PropTypes.string.isRequired
}