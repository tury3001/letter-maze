import { PropTypes } from 'prop-types';

export const WordGuess = ({ word }) => {
  return (
    <>
      <div className="flex mt-2">
      <div className="border w-7 h-7 mr-1 bg-white"></div>
      { word.split('').map( (c, i) => (
        <div className="border w-7 h-7 mr-1 border-slate-50 bg-gray-100 flex justify-center">
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