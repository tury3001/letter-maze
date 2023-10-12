import PropTypes from 'prop-types';

export const LetterBox = ({ letter, id, selected = false, onLetterSelected }) => {

  return (
    <span
      className={`flex justify-center text-5xl p-5 border-2 border-slate-600 w-24 h-24 cursor-pointer bg-slate-200 ${ selected ? 'ring-2 ring-yellow-500 ring-inset bg-yellow-100 text-yellow-600' : '' }` }
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


