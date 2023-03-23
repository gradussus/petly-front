// import { useSelector } from 'react-redux';
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
  useEffect(() => {
    
    async function fetchNotice() {
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

  useEffect(() => {
    
    if(!noticeId) {
      return
    }
    
    async function fetchModal() {
     
      try {
        const {data}  = await axios.get(`${NAME_URL}notices/find_notice/${noticeId}`)
        setModalCard(data)
      } catch (error) {
      }
    }
    fetchModal()
  }, [noticeId])
// console.log("first", type)
  const toggleModal = () => {
    setShowModal(!showModal)
  }
  // console.log('modalCard', modalCard)
  const onChangeModal = () => toggleModal()
  // const notices = useSelector(selectNotices);
  // const noticesList = notices.result ? notices.result : [];
  return (
    <>
      <ContainerCard>
        <Ul>
          {states?.map(state => <NoticeCategoryItem noticeData={state}
            onChangeModal={onChangeModal} handleChange={handleChange} />

          )}
        </Ul>
      </ContainerCard>
      {showModal && <ModalSample toggleModal={toggleModal} >
        <ItemPetModal modalCard={modalCard} />
      </ModalSample>}
      {showModal && <ModalSample toggleModal={toggleModal} >
        <AddPets />
      </ModalSample>}
     

    </>


  );
};

export default NoticesCategoriesList;
