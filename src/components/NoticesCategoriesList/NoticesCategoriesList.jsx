import { useSelector } from 'react-redux';
import axios from "axios";
import { Ul, Li, ImgCart } from "../NoticesPage/NoticesPage.Style";

import { useEffect, useState } from "react";

import noticesSelectors from '../../redux/notices/noticesSelectors';

const { selectNotices } = noticesSelectors;
const NAME_URL = 'https://petly-vxdt.onrender.com/'

const NoticesCategoriesList = ({type}) => {
  const [state, setState] = useState([]) 
  const [dog, setDog] = useState('notices')
  // const [type, setType] = useState('notices')
  console.log("name", type)
  // setDog(type)
// const onChange = () => setDog({dog: type})
  console.log("dog", dog)
  useEffect(() => {
    console.log('type change')
    setDog(type);
    if(!state ) {
      return
    }
    const fetchNotice = async () => { 
             console.log("NAME_URL",`'https://petly-vxdt.onrender.com/${dog}'`)
      try {
        // setDog(type)
        const {data} = await axios.get(`https://petly-vxdt.onrender.com/${dog}`)        
        setState(data)   
       
        console.log("data", setDog(type))    
      } catch (error) {
      }
    }
    fetchNotice()
  }, [dog, type])
 

  const pets = state
console.log("first", pets)

  // const notices = useSelector(selectNotices);
  // const noticesList = notices.result ? notices.result : [];
  return (
    <Ul>
          { pets?.map(pet => 
            <Li key={pet.id}>              
              <ImgCart src={pet.imageURL} alt={pet.title}/>
              <div>
              <p>{pet.breed}</p>
              <p>{pet.location}</p>
              <p>{pet.birthDate}</p>
              </div>
              
             
            </Li>
          )}
        </Ul>

    // <ul>
    //   {noticesList.map(itemData => {
    //     return <li key={itemData._id}>{itemData.name}</li>;
    //   })}
    // </ul>
  );
};

export default NoticesCategoriesList;
