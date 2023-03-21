import { useEffect, useState } from "react";
import { BtnAdd, ContainerAdd, P, TabletBtnAdd, Img } from "./NoticesPage.Style";
import  cross  from "components/ItemPetModal/image/cross2.svg";


const AddNoticeButton = () => {

    const [windowWidth, setWindowWidth] = useState(window.screen.width);
    useEffect(() => {
        window.onresize = () => {setWindowWidth(window.screen.width)};
      
        return () => {window.onresize = false};
    }, [windowWidth]);
    // console.log("windowWidth", window.onresize)
    const screen = windowWidth
    console.log("screen", screen) 

    return (
        <>
         {(windowWidth < 768) ? (<BtnAdd type="button"><Img src={cross} alt="Cross" />
        <br/>Add pet</BtnAdd>): 
        (<ContainerAdd><P>Add pet</P> <TabletBtnAdd type="button"><Img src={cross} alt="Cross" />
        <br/></TabletBtnAdd></ContainerAdd>
        )}
        </>
       
    )
}

export default AddNoticeButton;