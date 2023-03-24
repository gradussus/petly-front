// import { useSelector } from 'react-redux';
import NoticeCategoryItem from 'components/NoticesPage/NoticeCategoryItem/NoticeCategoryItem';
import axios from 'axios';
import { Ul, ContainerCard } from '../NoticesPage/NoticesPage.Style';
import { ModalSample } from 'components/Modal/Modal';
import { ItemPetModal } from 'components/ItemPetModal/ItemPetModal';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const NAME_URL = 'https://petly-vxdt.onrender.com/notices/';

const NoticesCategoriesList = ({ type, foundPets }) => {
  const [states, setStates] = useState([]);
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [noticeId, setNoticeId] = useState('');
  const [modalCard, setModalCard] = useState([]);
  const { token } = useAuth();

  // const query =
  const handleChange = id => setNoticeId(id);


// console.log("first", namePets)
// console.log("query", query)
// useEffect(() => {
//   setQuery(foundPets)
//   console.log('MY')
//   console.log(foundPets)
//   async function fetchFoundNotice() {
//     try {
//       if(!foundPets){
//         return
//       }console.log('foundPets.namePets',  foundPets.namePets)
//         const { data } = await axios.get(`${NAME_URL}search/${type}/${foundPets.namePets}`)
//         setStates(data);  
//         // setQuery('');        
     
     
//     } catch (error) {}
    
//   }
//   fetchFoundNotice()
// }, [foundPets, type])

console.log("type", type)
  useEffect(() => {
    console.log('search', `${NAME_URL}search/${type}/${query.namePets}`)
    console.log('query', query)
    console.log('foundPets', foundPets.namePets)
    setQuery(foundPets)
    async function fetchNotice() {
      try {
        if (['sell', 'lost-found', 'for-free'].includes(type)) {
          if (foundPets){
            const { data } = await axios.get(`${NAME_URL}search/${type}/${foundPets.namePets}`)
            setStates(data);
          }
          else {
            const { data } = await axios.get(`${NAME_URL}${type}`);
            setStates(data);
          }
          
        } else if (['own', 'favorite'].includes(type)) {
          const { data } = await axios.get(`${NAME_URL}${type}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setStates(data);

         
        }
        
      } catch (error) {}
    }
    fetchNotice();
  }, [type, token,query, foundPets]);

  useEffect(() => {
    if (!noticeId) {
      return;
    }
    
    async function fetchModal() {
      try {
        const { data } = await axios.get(
          `${NAME_URL}notices/find_notice/${noticeId}`
        );
        setModalCard(data);
      } catch (error) {}
    }
    fetchModal();
  }, [noticeId]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  // console.log('modalCard', modalCard)
  const onChangeModal = () => toggleModal();
  // const notices = useSelector(selectNotices);
  // const noticesList = notices.result ? notices.result : [];
  return (
    <>
      <ContainerCard>
        <Ul>
          {states?.map(state => (
            <NoticeCategoryItem
              noticeData={state}
              onChangeModal={onChangeModal}
              handleChange={handleChange}
            />
          ))}
        </Ul>
      </ContainerCard>
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <ItemPetModal modalCard={modalCard} />
        </ModalSample>
      )}
    </>
  );
};

export default NoticesCategoriesList;
