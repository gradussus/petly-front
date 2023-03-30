import * as SC from '../input.styled';

import { LabelFile } from '../input';
import { useState } from 'react';
import { ReactComponent as CrossSvg } from '../../img/Cross.svg';

import { FileWrapper, Text } from '../input.styled';

export const FileInput = ({ setToFormFile, image }) => {
  const [, setAnswerData] = useState(null);

  const handleChange = e => {
    let file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = function () {
      setAnswerData(reader.result);
      setToFormFile(file);
    };

    if (file) {
      setAnswerData(reader.readAsDataURL(file));
    } else {
      setAnswerData('');
    }
  };

  return (
    <FileWrapper>
      <Text>Load the pet's image</Text>

      {!image ? (
        <LabelFile>
          <CrossSvg />
          <SC.FileInput
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
          ></SC.FileInput>
        </LabelFile>
      ) : (
        <LabelFile>
          <SC.FileInput
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
          ></SC.FileInput>
          <img
            src={URL.createObjectURL(image)}
            alt=""
            width={140}
            onClick={() => setAnswerData(null)}
          />
        </LabelFile>
      )}
    </FileWrapper>
  );
};
