import * as SC from '../input.styled';

import { LabelFile } from '../input';
import { useState } from 'react';

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
       Load the pet's image
          {!answerData ?
        <LabelFile>
        <SC.FileInput type='file' name="file" accept="image/*" onChange={handleChange} ></SC.FileInput>
       </LabelFile>
         :
        <LabelFile>
         <img src={answerData} alt='' width={140} onClick={()=>setAnswerData(null)} />
       </LabelFile>}
        </>
    );
  };
