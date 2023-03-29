import * as SC from '../input.styled';

import { LabelFile } from '../input';
import { useState } from 'react';
import { ReactComponent as CrossSvg } from '../../img/Cross.svg';

import { Text } from '../input.styled';

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
        <Text>Load the pet's image</Text>
       
          {!answerData ?
        <LabelFile>
          <CrossSvg/> 
        <SC.FileInput type='file' name="file" accept="image/*" onChange={handleChange} ></SC.FileInput>
       </LabelFile>
         :
        <LabelFile>
          
         <img src={answerData} alt='' width={140} onClick={()=>setAnswerData(null)} />
       </LabelFile>}
        </>
    );
  };
