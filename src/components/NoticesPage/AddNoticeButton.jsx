// import { useEffect, useState } from "react";
import { BtnAdd, ContainerAdd, P, Span, Img } from "./NoticesPage.Style";
import cross from "components/ItemPetModal/image/cross2.svg";

const AddNoticeButton = ({ onChangeModal }) => {

    return (
        <>
            <ContainerAdd><P>Add pet</P> <BtnAdd type="button" ><Img src={cross} alt="Cross" />
                <Span>Add pet</Span></BtnAdd></ContainerAdd>
        </>

    )
}

export default AddNoticeButton;