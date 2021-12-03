import React, { useCallback, useState } from 'react';
import { Button, Input } from 'antd';
import { FormWrapper, CustomButton } from './style';
import useInput from 'hooks/useInput';
import { useSelector } from 'react-redux';
import { MainPosts } from 'redux/types/post';
import { RootState } from 'redux/reducers';

interface Props {
  post: MainPosts;
}

const CommentForm = ({ post }: Props) => {
  const id = useSelector((state:RootState) => state.user.me?.id);
  const { formValues, onChange } = useInput({
    commentText: "",
  });

  const onSubmitComment = useCallback(() => {
    console.log(post.id, formValues.commentText);
  }, [formValues.commentText]);

  return (
    <FormWrapper onFinish={onSubmitComment}>
      <Input.TextArea
        name="commentText"
        value={formValues.commentText} 
        onChange={onChange}
        rows={4}
      />
      <CustomButton type="primary" htmlType="submit">
        삐약
      </CustomButton>
    </FormWrapper>
  );
};

export default CommentForm;