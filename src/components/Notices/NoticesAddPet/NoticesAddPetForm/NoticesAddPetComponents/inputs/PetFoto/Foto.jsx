import * as SC from '../input.styled';


import { useState } from 'react';
import { ReactComponent as CrossSvg } from '../../img/Cross.svg';
import {  LabelFile } from '../input';
 import { Text, ContainerImg } from '../input.styled';
// import { Container } from '@mui/system';
// import axios from 'axios';

export const FileInput = ({setToFormFile}) => {
    const [answerData, setAnswerData] = useState(null);


    const handleChange = (e) => {
        console.log('log file' , e.target.files[0]);

        let file = e.target.files[0];


        const reader  = new FileReader();

          reader.onloadend = function () {
            setAnswerData(reader.result);
            setToFormFile(file);
          }

          if (file) {
            setAnswerData(reader.readAsDataURL(file));
          } else {
            setAnswerData('');
          }

        }
 
    return (
        <>
      {!answerData ? (  
      <>  
      <Text>Load the pet's image</Text>
      <ContainerImg>
      <LabelFile>
           <CrossSvg/> 
            </LabelFile>
      </ContainerImg>
            
           <SC.FileInput type='file' name="file" accept="image/*" onChange={handleChange} >         
           </SC.FileInput>
           
       </>
)
:       <img src={answerData} alt='' width={140} />}
</>
     
      
    );
  };
