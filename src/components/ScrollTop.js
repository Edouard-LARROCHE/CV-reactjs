import React from 'react';

export default function ScrollTop() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <h6 onClick={scrollTop}> scroll </h6>
    </div>
  );
}
