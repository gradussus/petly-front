import React from 'react';

import ClipLoader from 'react-spinners/ClipLoader';

const Loader = ({ size = 100 }) => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div style={style}>
      <ClipLoader size={size} color="#000" />
    </div>
  )
};

export default Loader;
