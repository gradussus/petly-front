// import { useSelector } from 'react-redux';
import NoticeCategoryItem from "components/NoticesPage/NoticeCategoryItem/NoticeCategoryItem";
import axios from "axios";
import { Ul, ContainerCard } from "../NoticesPage/NoticesPage.Style";
import { ModalSample } from "components/Modal/Modal";
import { ItemPetModal } from "components/ItemPetModal/ItemPetModal";
import { useEffect, useState } from "react";
// import noticesSelectors from '../../redux/notices/noticesSelectors';
// import { Container } from 'components/ItemPetModal/ItemPetModal.Style';
// const { selectNotices } = noticesSelectors;
const NAME_URL = 'https://petly-vxdt.onrender.com/'

const NoticesCategoriesList = ({ type }) => {
  const [states, setStates] = useState([])
  const [pets, setPets] = useState('notices')
  const [showModal, setShowModal] = useState(false);
  const [noticeId, setNoticeId] = useState('')
  const [modalCard, setModalCard] = useState([])
  // const query =
  const handleChange = (id) => setNoticeId(id)
  console.log("noticeId", noticeId)
  useEffect(() => {
    console.log("first")
    async function fetchNotice() {
      try {
        const { data } = await axios.get(`${NAME_URL}${pets}`)

        setPets(`notices/${type}`);
        setStates(data)
      } catch (error) {
      }
    }
    fetchNotice()
  }, [pets, type])
console.log("type", type)
  useEffect(() => {
    console.log("first")
    async function fetchNotice() {
      try {
        const { data } = await axios.get(`${NAME_URL}notices/find_notice/${noticeId}`)

        setModalCard(data)
      } catch (error) {
      }
    }
    fetchNotice()
  }, [noticeId])

  const toggleModal = () => {
    setShowModal(!showModal)
  }
  console.log('modalCard', modalCard)
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
    </>


  );
};

export default NoticesCategoriesList;
