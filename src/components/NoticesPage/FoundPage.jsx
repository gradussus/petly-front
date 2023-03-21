import  found  from "components/ItemPetModal/image/found.svg";
import { Input, Found, FoundImg, Label  } from "./NoticesPage.Style";

const NoticeFound = () => {

    return (
        <Found>
          <Label>
          <Input placeholder="Search"/> 
          <FoundImg src={found} alt="found" />
          </Label>
        
               
      </Found>
    )
};
export default NoticeFound;