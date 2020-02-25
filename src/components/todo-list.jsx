import React from 'react';
import styled from 'styled-components';
import { Icon, List } from 'antd';

export default ({ items, onCheckClick, onDeleteClick }) => (
  <S.List
    itemLayout="horizontal"
    dataSource={items}
    renderItem={item => (
      <S.ListItem>
        <p>{item.content}</p>
        <Icon onClick={() => onCheckClick(item)} type="check-circle" />
        <Icon onClick={() => onDeleteClick(item)} type="delete" />
      </S.ListItem>
    )}
  />
)

const S = {
  List: styled(List)`
  `,
  ListItem: styled(List.Item)`
    p {
      width: 100%;
      margin-bottom: 0;
    }
    i {
      margin: 8px;
      cursor: pointer;
      svg {
        height: 20px;
        width: 20px;
      }
    }
  `
};
