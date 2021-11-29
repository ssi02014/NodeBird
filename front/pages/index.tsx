import React from "react";
import type { NextPage } from 'next';
import AppLayout from "components/AppLayout";
import PostForm from "components/Post/Form";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import PostCard from "components/Post/Card";
const Home: NextPage = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const { mainPosts } = useSelector((state: RootState) => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  )
};

export default Home;