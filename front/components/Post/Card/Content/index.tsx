import Link from 'next/link';
import React from 'react';

interface Props {
  postData: string;
}
const PostCardContent = ({ postData }: Props) => {
  return (
    <div>
      {postData && postData.split(/(#[^\s#]+)/g).map((el: any, idx) => {
        if (el.match(/(#[^\s#]+)/)) {
          return <Link href={`/hashtag/${el.slice(1)}`} key={idx}><a>{el}</a></Link>
        }
        return el
      })}
    </div>
  );
};

export default PostCardContent;