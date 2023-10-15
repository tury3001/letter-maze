import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from "react-icons/fa";

export const Message = ({ message }) => {

  const [ messageDisplay, setMessageDisplay ] = useState(false);
  

  useEffect(() => {
    showMessage();
  }, [message]);

  const showMessage = () => {
    setMessageDisplay(true);
    setTimeout(() => {
      setMessageDisplay(false);
    }, 1000)
  }

  const getMessageStyle = () => {
    return message.correct ? 'bg-green-600' : 'bg-red-600';
  }

  const getIcon = () => {
    if (message.correct)
      return (<FaCheck className="mt-1 mr-3 text-white" />)
    else
      return (<FaTimes className="mt-1 mr-3 text-white" />)
  }

  return (
    <>
    <div className={ `absolute top-[200px] left-[200px] ${ messageDisplay ? '' : 'hidden' }` }>
      <div className={ `flex mx-auto p-2 border border-slate-400 rounded text-center font-bold text-lg shadow-md text-white ${ getMessageStyle() }` }>
         { getIcon() } { message.text }
      </div>
    </div>    
    </>
  )
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}
