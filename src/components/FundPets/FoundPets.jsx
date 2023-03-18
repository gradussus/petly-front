import { useState } from "react"
import { ModalFundPet } from "../Modals/ModalsFundPet";
import { BtnAdd } from "../Modals/ModalFundPet.Style";
import styled from "styled-components";

const Container = styled.div`
    padding: 30px;`

export const FoundPets = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    return (
        <Container>
            {showModal && <ModalFundPet toggleModal={toggleModal} />}
            <BtnAdd type="button" onClick={() => toggleModal()}>Lean more</BtnAdd>
        </Container>
    )
}