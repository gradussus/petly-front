import * as SC from './input.styled';

export const FileInput = (props) => {

    return (
        <SC.FileInput type='file' {...props}/>
    );
  };

export const LabelFile = ({children}) => {

return (
    <SC.LabelFileInput>{children}</SC.LabelFileInput>
);
};

export const CommentsInput = (props) => {
    return <SC.CommentsInput type="text" {...props} />;
  };