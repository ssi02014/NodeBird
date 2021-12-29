import React, { useEffect } from "react";
import type { NextPage } from 'next';
import AppLayout from "components/AppLayout";
import PostForm from "components/Post/Form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import PostCard from "components/Post/Card";
import { postTypes } from "redux/Actiontypes/postActionTypes";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootState) => state.user);
  const { mainPosts } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch({
      type: postTypes.LOAD_POSTS_REQUEST,
    })
  }, []);
  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  )
};

export default Home;