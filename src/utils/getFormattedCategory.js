const getFormattedCategory = category => {
  switch (category) {
    case 'for-free':
      return 'in good hands';
    case 'lost-found':
      return 'lost/found';
    default:
      return 'sell';
  }
};

export default getFormattedCategory;
