import styled from 'styled-components';
import { theme } from '../../../../theme'

export const ErrorWrapper = styled.div`
    width: 100%;
    position: relative;

    margin-bottom: 40px;

`
export const Border = styled.div`
    width: 100%;
    height: 50px;
    outline: 1px #E2001A solid;
    border-radius: ${theme.radii.large};
    position: absolute;
    top: -0.5px;
    right: 0px;

`

export const Dagger = styled.img`
    position:absolute;
    top: 15px;
    right: 20px;
    z-index: 999;
`

export const ErrorMessages = styled.div`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-align:start;
    color: #E2001A;
    position: absolute;
    z-index: 999;
    top: 55px;
    right: -32px;
    width: 100%;
    margin-right: auto;
`
