import React from 'react';
import { MainPosts } from 'redux/interface/post';

interface Props {
  post: MainPosts
}
const PostCard = ({ post }: Props) => {
  return (
    <div>
      Post Card
    </div>
  );
};

export default PostCard;