import React from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export default function ScrollTop() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <KeyboardArrowUpIcon className='scrool-top' onClick={scrollTop} />
    </div>
  );
}
