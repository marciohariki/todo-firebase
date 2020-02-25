import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

const { Content } = Layout;

export default () => {
  const [items, setItems] = useState([]);

  const onSubmit = i => {
    const newItem = {
      id: uuidv4(),
      content: i,
      done: false
    };
    setItems([...items, newItem]);
  };

  const onCheckClick = item => {
    setItems(items.map(i => {
      if (i.id === item.id) i.done = !i.done;
      return i
    }));
  };

  const onRemoveClick = item => {
    setItems(items.filter(i => i.id !== item.id));
  };

  return (
    <S.Layout className="layout">
      <S.Content>
        <S.Title>Todo List</S.Title>
        <TodoInput onSubmit={onSubmit} />
        <TodoList
          onCheckClick={onCheckClick}
          onRemoveClick={onRemoveClick}
          items={items}
        />
      </S.Content>
    </S.Layout>
  );
};

const S = {
  Title: styled.h1`
  `,
  Layout: styled(Layout)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Content: styled(Content)`
    display: flex;
    flex-direction: column;
    max-width: 968px;
    width: 100%;
    padding: 20px;
  `
};
