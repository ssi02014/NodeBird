import React, { useCallback, useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import { FormWrapper, CustomButton } from './style';
import useInput from 'hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { MainPosts } from 'redux/types/postTypes';
import { RootState } from 'redux/reducers';
import { postTypes } from 'redux/Actiontypes/postActionTypes';

interface Props {
  post: MainPosts;
}

interface InitialValue {
  id?: string;
  email?: string;
  nickname?: string;
  password?: string;
  commentText?: string;
  text?: string;
}

const CommentForm = ({ post }: Props) => {
  const id = useSelector((state:RootState) => state.user.me?.id);
  const { addCommentDone } = useSelector((state:RootState) => state.post);
  const [ formValues, onChange, onReset ] = useInput({
    commentText: "",
  });

  const dispatch = useDispatch();

  const onSubmitComment = useCallback(() => {
    const { commentText } = formValues;
    dispatch({
      type: postTypes.ADD_COMMENT_REQUEST,
      data: { 
        content: formValues, 
        postId: post.id, 
        userId: id 
      },
    })
  }, [formValues, id]);

  useEffect(() => {
    if (addCommentDone) {
      onReset();
    }
  }, [addCommentDone]);

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