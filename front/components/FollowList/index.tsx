import React, { useMemo } from 'react';
import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { LoadMoreButtonContainer, StyledListItem, StyledList } from './style';

interface Props {
  header: string;
  data: { nickname: string }[]
}

const FollowList = ({ header, data }: Props) => {
  const gridOptions = useMemo(() => {
    return { gutter: 4, xs: 2, md: 3 }
  }, []);
  
  return (
    <>
      <StyledList
        grid={gridOptions}
        size="small"
        header={<div>{header}</div>}
        loadMore={
          <LoadMoreButtonContainer>
            <Button>더 보기</Button>
          </LoadMoreButtonContainer>
        }
        dataSource={data}
        renderItem={(item: any) => (
          <StyledListItem>
            <Card actions={[<StopOutlined key="stop" />]}>
              <Card.Meta description={item.nickname} />
            </Card>
          </StyledListItem>
        )}
        bordered
      />
    </>
  );
};

export default FollowList;