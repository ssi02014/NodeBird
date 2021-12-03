import React, { useCallback, useRef, useState } from 'react';
import { StyledForm } from './style';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { addPostRequestAction } from 'redux/reducers/postReducer';

const PostForm = () => {
  const { imagePaths } = useSelector((state:RootState) => state.post);
  const [ formValues, setFormValues ] = useState({
    text: "",
  });
  const dispatch = useDispatch();
  const imageRef = useRef<HTMLInputElement>(null);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value, 
    });
  }, [formValues]);

  const onClickImage = useCallback(() => {
    if(imageRef.current) {
      imageRef.current.click();
    }
  }, [imageRef.current]);

  const onSubmit = useCallback(() => {
    dispatch(addPostRequestAction());
    
    setFormValues({
      text: "",
    });
  }, []);
  
  return (
    <>
      <StyledForm>
        <Input.TextArea
          name="text"
          onChange={onChange}
          value={formValues.text}
          maxLength={40}
          placeholder="오늘은 어떤 신기한 일이 있었나요?"
        />
        <div>
          <input id="file" type="file" ref={imageRef} multiple hidden />
          <Button onClick={onClickImage}>이미지 업로드</Button>
          <Button 
            type="primary" 
            style={{ float: 'right'}}
            htmlType="submit"
            onClick={onSubmit}
          >
            짹짹
          </Button>
        </div>
        <div>
          {imagePaths.map((v) => (
            <div key={v} style={{ display: 'inline-block'}}>
              <img src={v} style={{ width: "200px" }} alt="이미지" />
            </div>
          ))}
        </div>
      </StyledForm> 
    </>
  );
};

export default PostForm;