import * as SC from '../input.styled';

import { LabelFile } from '../input';
import { useState } from 'react';
// import axios from 'axios';

// const baseURL = 'https://petly-vxdt.onrender.com/notices/create';


export const FileInput = () => {
    const [answerData, setAnswerData] = useState(null);


    const handleChange = (e) => {
        console.log('log file' , e.target.files[0]);

        let file = e.target.files[0];


        const reader  = new FileReader();

          reader.onloadend = function () {
            setAnswerData(reader.result);
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
      <>  Load the pet's image
        <LabelFile>
           <SC.FileInput type='file' name="file" accept="image/*" onChange={handleChange} ></SC.FileInput>
       </LabelFile>
       </>
)
:       <img src={answerData} alt='' width={140} />}
</>
     
      
    );
  };


     // const uploadFunction = async () =>{
    //     if (!selectedFile){
    //         return alert("Please select a file")
    //     }
    //         let response = await fetch(baseURL, {
    //           method: 'POST',
    //           body: new FormData(selectedFile)
    //         });
        
    //         let result = await response.json();
    //         console.log(result);
    // }