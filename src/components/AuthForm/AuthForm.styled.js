import styled from 'styled-components';
import { theme } from '../../theme'

export const AuthForm = styled.form`
width: 620px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 60px 80px;
magrin-top: 80px;
border-radius: ${theme.radii.large};
background: ${theme.colors.white};

box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
text-align: center;
 `;
// font-weight: ${theme.fontWeights.bold};
// font-size: ${theme.fontSizes.mx};
// width: 100%;
// border-radius: ${theme.radii.large};
// padding: 10px;
// border: ${theme.borders.large};
// background: ${theme.colors.accent};
// color: ${theme.colors.white};