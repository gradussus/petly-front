// import { useSelector } from 'react-redux';
<<<<<<< HEAD
import NoticeCategoryItem from "components/NoticesPage/NoticeCategoryItem/NoticeCategoryItem";
import axios from "axios";
import AddPets from "components/NoticesPage/AddPets";
import { Ul, ContainerCard } from "../NoticesPage/NoticesPage.Style";
import { ModalSample } from "components/Modal/Modal";
import { ItemPetModal } from "components/ItemPetModal/ItemPetModal";
import { useEffect, useState } from "react";

const NAME_URL = 'https://petly-vxdt.onrender.com/notices/'

const NoticesCategoriesList = ({ type, foundPets }) => {
  const [states, setStates] = useState([])
  // const [pets, setPets] = useState('notices')
  const [showModal, setShowModal] = useState(false);
  const [noticeId, setNoticeId] = useState('')
  const [modalCard, setModalCard] = useState([])
  const [query, setQuery] = useState('')
  // const query =
  const handleChange = (id) => setNoticeId(id)

  const {namePets} = foundPets
  console.log("first", foundPets)
=======
import NoticeCategoryItem from 'components/NoticesPage/NoticeCategoryItem/NoticeCategoryItem';
import axios from 'axios';
import { Ul, ContainerCard } from '../NoticesPage/NoticesPage.Style';
import { ModalSample } from 'components/Modal/Modal';
import { ItemPetModal } from 'components/ItemPetModal/ItemPetModal';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const NAME_URL = 'https://petly-vxdt.onrender.com/';

const NoticesCategoriesList = ({ type }) => {
  const [states, setStates] = useState([]);
  // const [pets, setPets] = useState('notices')
  const [showModal, setShowModal] = useState(false);
  const [noticeId, setNoticeId] = useState('');
  const [modalCard, setModalCard] = useState([]);
  const { token } = useAuth();
  // const query =
  const handleChange = id => setNoticeId(id);

>>>>>>> d731e21b55f7d0eff102b3934c5de0b724c817ac
  useEffect(() => {
    
    async function fetchNotice() {
<<<<<<< HEAD
      try {    
        console.log('first',`${NAME_URL}${query}`)    
        const { data } = await axios.get(`${NAME_URL}${query}`)        
        setStates(data)

      } catch (error) {
        console.log({message: error})
      } finally {
        
      }
    }
    fetchNotice()
  }, [ type, query])
// console.log("states", states)
  useEffect(() => {

    if (!namePets) {
      return setQuery(`${type}`)
    }
    
    setQuery(`search/${type}/${namePets}`)
    // console.log('first',`${NAME_URL}${query}`)
    

    
  }, [namePets, type, query])

  // console.log('query', query)
=======
      try {
        if (['sell', 'lost-found', 'for-free'].includes(type)) {
          const { data } = await axios.get(`${NAME_URL}notices/${type}`);
          setStates(data);
        } else if (['own', 'favorite'].includes(type)) {
          const { data } = await axios.get(`${NAME_URL}notices/${type}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setStates(data);
        }
      } catch (error) {}
    }
    fetchNotice();
  }, [type, token]);
>>>>>>> d731e21b55f7d0eff102b3934c5de0b724c817ac

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
<<<<<<< HEAD
    fetchModal()
  }, [noticeId])
// console.log("first", type)
=======
    fetchModal();
  }, [noticeId]);

>>>>>>> d731e21b55f7d0eff102b3934c5de0b724c817ac
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
<<<<<<< HEAD
      {showModal && <ModalSample toggleModal={toggleModal} >
        <ItemPetModal modalCard={modalCard} />
      </ModalSample>}
      {showModal && <ModalSample toggleModal={toggleModal} >
        <AddPets />
      </ModalSample>}
     

=======
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <ItemPetModal modalCard={modalCard} />
        </ModalSample>
      )}
>>>>>>> d731e21b55f7d0eff102b3934c5de0b724c817ac
    </>
  );
};

export default NoticesCategoriesList;
