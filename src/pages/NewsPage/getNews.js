import axios from 'axios';
// import { useEffect } from 'react';
// import { useState } from 'react';

axios.defaults.baseURL = 'https://petly-vxdt.onrender.com';

export const getNews = async () => {
  try {
    const response = await axios.get('/news');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// const NewsData = () => {
//   const [data, setData] = useState(null);

//   const [status, setStatus] = useState('pending');

//   useEffect = () => {
//     (async () => {
//       try {
//         setStatus('pending');

//         const data = await getNews();
//         setStatus('fulfilled');
//         setData(data);
//       } catch {
//         setStatus('rejected');
//       }
//     })();
//   };
// };

// useEffect = () => {
//   if ('rejected') {
//     toast.error('Nothing found. Please, try again.', { theme: 'colored' });
//   }
// };
