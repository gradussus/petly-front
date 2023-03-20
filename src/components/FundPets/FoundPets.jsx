import { useState } from "react"
import { ItemPetModal } from "components/ItemPetModal/ItemPetModal";
import { BtnAdd } from "components/ItemPetModal/ItemPetModal.Style";
import { ModalSample } from "components/Modal/Modal";
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
            {showModal && <ModalSample toggleModal={toggleModal} >
                <ItemPetModal/>
                </ModalSample>}
                <BtnAdd type="button" onClick={() => toggleModal()}>Lean more</BtnAdd>
        </Container>
    )
}