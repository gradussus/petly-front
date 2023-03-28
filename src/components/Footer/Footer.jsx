import React from 'react';
import * as SC from './Footer.styled.js';

export const Footer = () => {
    return <SC.FooterContainer>
        <SC.FooterSection>
        <SC.FooterContent>© 2023 All Rights Reserved</SC.FooterContent>
        <SC.FooterMenu>
                <SC.MenuItem>
                    <SC.MenuItemLink href="#">* Team Students GoIT *</SC.MenuItemLink>
                </SC.MenuItem>
        </SC.FooterMenu>      
        </SC.FooterSection>
    </SC.FooterContainer>
};