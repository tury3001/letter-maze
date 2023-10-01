import PropTypes from 'prop-types';

export const LetterBox = ({ letter, id, selected = false, onLetterSelected }) => {

  return (
    <span
      className={`flex justify-center text-5xl p-4 border border-slate-300 bg-slate-200 w-24 h-24 cursor-pointer ${ selected ? 'ring-2 ring-red-500 ring-inset bg-red-100 text-red-500' : '' }` }
      aria-label={ id }
      onClick={ onLetterSelected }
    >

      { letter }
    </span>
  )
};

LetterBox.propTypes = {
  letter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onLetterSelected: PropTypes.func.isRequired
}


