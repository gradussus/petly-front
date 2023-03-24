// import axios from 'axios';
// import { getNews } from 'utils/api/getNews';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { toast } from 'react-toastify';

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

// useEffect(() => {
//   if (status === 'rejected') {
//     toast.error('Nothing found. Please, try again.', { theme: 'colored' });
//   }
// }, [status]);
