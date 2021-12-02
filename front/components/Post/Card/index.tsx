import React, { useCallback, useMemo, useState } from 'react';
import PostImages from '../Images';
import { Avatar, Button, Card, Comment, List, Popover } from 'antd';
import { MainPosts } from 'redux/interface/post';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { CardWrapper } from './style';
import CommentForm from 'components/Comment/Form';
import PostCardContent from './Content';

interface Props {
  post: MainPosts;
}

const PostCard = ({ post }: Props) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state: RootState) => state.user.me?.id);

  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev); // 이런식으로 콜백함수를 넣으면 의존성에다 liked를 안넣어도됨
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
  }, []);

  const CardActions = useMemo(() => {
    return [
      <RetweetOutlined key="retweet" />,
      liked ? 
        <HeartTwoTone twoToneColor="#eb1f96" key="heart" onClick={onToggleLike} /> :
        <HeartOutlined key="heart" onClick={onToggleLike} />
      ,
      <MessageOutlined key="comment" onClick={onToggleComment} />, 
      <Popover key="more" content={(
        <Button.Group>
          {id && post.User.id === id ? (
            <>
              <Button>수정</Button>
              <Button>삭제</Button>
            </>
          ) : (
            <><Button>신고</Button></>
          )}
        </Button.Group>
      )}>
        <EllipsisOutlined />
      </Popover>  
    ]
  }, [onToggleLike, onToggleComment, liked, id]);

  return (
    <CardWrapper>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={CardActions}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List 
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
      {/* <Comments /> */}
    </CardWrapper>
  );
};

export default PostCard;