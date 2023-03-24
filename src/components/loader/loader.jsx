import React from 'react';

import ClipLoader from 'react-spinners/ClipLoader';

const Loader = ({ size = 100 }) => {
  return <ClipLoader size={size} color="#000" />;
};

export default Loader;
