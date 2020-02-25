import React from 'react';
import styled from 'styled-components';
import { Icon, List } from 'antd';

export default ({ items, onCheckClick, onRemoveClick }) => (
  <S.List
    itemLayout="horizontal"
    dataSource={items}
    renderItem={item => (
      <S.ListItem>
        <S.Text done={item.done}>{item.content}</S.Text>
        <Icon onClick={() => onCheckClick(item)} type={item.done ? 'undo' : 'check-circle'} />
        <Icon onClick={() => onRemoveClick(item)} type="delete" />
      </S.ListItem>
    )}
  />
)

const S = {
  Text: styled.p`${({ done }) => `
      width: 100%;
      margin-bottom: 0;
      text-decoration: ${done ? 'line-through' : 'none'}
  `}`,
  List: styled(List)`
  `,
  ListItem: styled(List.Item)`
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
