import React, { useEffect } from "react";
import type { NextPage } from 'next';
import AppLayout from "components/AppLayout";
import PostForm from "components/Post/Form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import PostCard from "components/Post/Card";
import { postTypes } from "redux/Actiontypes/postActionTypes";
import { MainPosts } from "redux/types/postTypes";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootState) => state.user);
  const { mainPosts, hasMorePost, loadPostsLoading } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch({
      type: postTypes.LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY; // 얼마나 스크롤 했는지
      const clientHeight = document.documentElement.clientHeight; //화면에 보이는 부분
      const scrollHeight = document.documentElement.scrollHeight // 총 스크롤 길이

      if (scrollY + clientHeight > scrollHeight - 300) {
        if (hasMorePost && !loadPostsLoading) {
          dispatch({
            type: postTypes.LOAD_POSTS_REQUEST,
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () =>  window.removeEventListener('scroll', onScroll);
  }, [hasMorePost, loadPostsLoading]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post: MainPosts) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  )
};

export default Home;