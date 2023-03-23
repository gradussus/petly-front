// import { useSelector } from 'react-redux';
import NoticeCategoryItem from 'components/NoticesPage/NoticeCategoryItem/NoticeCategoryItem';
import axios from 'axios';
import { Ul, ContainerCard } from '../NoticesPage.Style';
import { ModalSample } from 'components/Modal/Modal';
import { ItemPetModal } from 'components/NoticesPage/ItemPetModal/ItemPetModal';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

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

  useEffect(() => {
    async function fetchNotice() {
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
