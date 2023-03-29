import React, { useState } from 'react';
import * as SC from './Footer.styled.js';

import Modal from './FooterModal/FooterModal.jsx';
import maksUrl from './FooterModal/Images/maks.jpg';
import serhiiSlUrl from './FooterModal/Images/serhiiSl.jpg';
import oleksandrUrl from './FooterModal/Images/oleksandr.jpg';
import olegUrl from './FooterModal/Images/oleg.jpg';
import olenaUrl from './FooterModal/Images/olena.jpg';
import vitaliiUrl from './FooterModal/Images/vitalii.jpg';
import andriiUrl from './FooterModal/Images/andrii.jpg';
import nataliUrl from './FooterModal/Images/natali.jpg';
import darinaUrl from './FooterModal/Images/darina.jpg';
import ivanUrl from './FooterModal/Images/ivan.jpg';
import mykolaUrl from './FooterModal/Images/mykola.jpg';
import fedirUrl from './FooterModal/Images/fedor.jpg';
import volodymyrUrl from './FooterModal/Images/volodymyr.jpg';
import innaUrl from './FooterModal/Images/inna.jpg';
import valeriiaUrl from './FooterModal/Images/valeriia.jpg';
import veronikaUrl from './FooterModal/Images/veronika.jpg';

export const Footer = () => {
    const [modalActive, setModalActive] = useState(false);
    return <SC.FooterContainer>
        <SC.FooterSection>
        <SC.FooterContent>© 2023 All Rights Reserved</SC.FooterContent>
        <SC.FooterMenu>
            <SC.MenuItem>
                <SC.MenuItemLink href="#" className='open-btn' onClick={() => setModalActive(true)}>* Team Students GoIT *</SC.MenuItemLink>
            </SC.MenuItem>
            </SC.FooterMenu>  
            <Modal active={modalActive} setActive={setModalActive}>
                <SC.TeamWrapper>
                    <SC.TeamCard>
                        <a href="https://github.com/gradussus" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={vitaliiUrl} loading="lazy" alt="Vitalii" class="team-image"/>
                            <SC.TeamName>Vitalii</SC.TeamName>
                            <SC.TeamRole>Team Lead</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/LenaK513" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={olenaUrl} loading="lazy" alt="Olena" class="team-image"/>
                            <SC.TeamName>Olena</SC.TeamName>
                            <SC.TeamRole>Scrum Master</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/IvanBlazhko" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={ivanUrl} loading="lazy" alt="Ivan"/>
                            <SC.TeamName>Ivan</SC.TeamName>
                            <SC.TeamRole>Team Lead (front part)</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/Ghozzty" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={fedirUrl} loading="lazy" alt="Fedir"/>
                            <SC.TeamName>Fedir</SC.TeamName>
                            <SC.TeamRole>Developer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/Natali2721" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={nataliUrl} loading="lazy" alt="Natali" class="team-image"/>
                            <SC.TeamName>Natali</SC.TeamName>
                            <SC.TeamRole>Developer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/Slapchenko" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={serhiiSlUrl} loading="lazy" alt="Serhii"/>
                            <SC.TeamName>Serhii</SC.TeamName>
                            <SC.TeamRole>Developer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/AlexCheverda" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={oleksandrUrl} loading="lazy" alt="Oleksandr"/>
                            <SC.TeamName>Oleksandr</SC.TeamName>
                            <SC.TeamRole>Developer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/andrii-pozniak" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={andriiUrl} loading="lazy" alt="Andrii"/>
                            <SC.TeamName>Andrii</SC.TeamName>
                            <SC.TeamRole>Developer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/Albertukraine" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={olegUrl} loading="lazy" alt="Oleg"/>
                            <SC.TeamName>Oleg</SC.TeamName>
                            <SC.TeamRole>Developer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/darinacat87" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={darinaUrl} loading="lazy" alt="Darina"/>
                            <SC.TeamName>Darina</SC.TeamName>
                            <SC.TeamRole>Developer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/maksnovakov" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={maksUrl} loading="lazy" alt="Maks"/>
                            <SC.TeamName>Maks</SC.TeamName>
                            <SC.TeamRole>Developer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/MykolaPom" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={mykolaUrl} loading="lazy" alt="Mykola"/>
                            <SC.TeamName>Mykola</SC.TeamName>
                            <SC.TeamRole>Developer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={volodymyrUrl} loading="lazy" alt="Volodymyr"/>
                            <SC.TeamName>Volodymyr</SC.TeamName>
                            <SC.TeamRole>Team Lead QA</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={innaUrl} loading="lazy" alt="Inna"/>
                            <SC.TeamName>Inna</SC.TeamName>
                            <SC.TeamRole>QA Engineer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={valeriiaUrl} loading="lazy" alt=" Valeriia"/>
                            <SC.TeamName> Valeriia</SC.TeamName>
                            <SC.TeamRole>QA Engineer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                    <SC.TeamCard>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" class="team-link">
                            <SC.TeamImage src={veronikaUrl} loading="lazy" alt="Veronika"/>
                            <SC.TeamName>Veronika</SC.TeamName>
                            <SC.TeamRole>QA Engineer</SC.TeamRole>
                        </a>
                    </SC.TeamCard>
                </SC.TeamWrapper>
            </Modal>    
        </SC.FooterSection>
    </SC.FooterContainer>
};