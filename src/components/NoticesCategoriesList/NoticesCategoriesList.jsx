// import { useSelector } from 'react-redux';
import NoticeCategoryItem from "components/NoticesPage/NoticeCategoryItem/NoticeCategoryItem";
import axios from "axios";
import { Ul, ContainerCard } from "../NoticesPage/NoticesPage.Style";

import { useEffect, useState } from "react";

import noticesSelectors from '../../redux/notices/noticesSelectors';
// import { Container } from 'components/ItemPetModal/ItemPetModal.Style';

const { selectNotices } = noticesSelectors;
const NAME_URL = 'https://petly-vxdt.onrender.com/'

const NoticesCategoriesList = ({ type }) => {
  const [states, setStates] = useState([])
  const [pets, setPets] = useState('notices')
  console.log("name", type)
  
  console.log("dog", pets)
  useEffect(() => {
    console.log('type change')
    
    if (!states) {
      return
    }
    const fetchNotice = async () => {
       console.log("NAME_URL",`'${NAME_URL}${pets}'`)
      try {
        const { data } = await axios.get(`${NAME_URL}${pets}`)
        setStates(data)
        setPets(`notices/${type}`);
      } catch (error) {
      }
    }
    fetchNotice()
  }, [pets, type])

  console.log("first", states)

  // const notices = useSelector(selectNotices);
  // const noticesList = notices.result ? notices.result : [];
  return (
    <ContainerCard>
      <Ul>
      {states?.map(state => <NoticeCategoryItem noticeData={state} />

      )}
    </Ul>
    </ContainerCard>
   
  );
};

export default NoticesCategoriesList;
