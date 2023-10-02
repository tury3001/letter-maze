import { PropTypes } from 'prop-types';

export const LetterFill = ({ char }) => {
  return (
    <span className="w-16 h-16 py-3 border border-1 border-slate-300 flex justify-center text-slate-400 text-3xl align-bottom">
      { char ? char.toUpperCase() : '_' }
    </span>
  )
}

LetterFill.propTypes = {
  char: PropTypes.string.isRequired
}