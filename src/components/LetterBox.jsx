import PropTypes from 'prop-types';

export const LetterBox = ({ letter }) => {

  return (
    <span className="flex justify-center text-5xl p-4 border border-slate-300 bg-slate-200 w-16 h-24">
      { letter }
    </span>
  )
};

LetterBox.propTypes = {
  letter: PropTypes.string.isRequired
}


