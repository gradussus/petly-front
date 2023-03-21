import  found  from "components/ItemPetModal/image/found.svg";
import { Input, Found,
    
  } from "./NoticesPage.Style";

const NoticeFound = () => {

    return (
        <Found>
        <Input placeholder="Search"/> 
        <img src={found} alt="found" />       
      </Found>
    )
};
export default NoticeFound;