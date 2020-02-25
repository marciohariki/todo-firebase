import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import TodoList from '../components/todo-list'
import TodoInput from '../components/todo-input'

const { Content } = Layout;

const data = [
  {
    content: 'Ant Design Title 1',
  },
  {
    content: 'Ant Design Title 2',
  },
  {
    content: 'Ant Design Title 3',
  },
  {
    content: 'Ant Design Title 4',
  },
];

const Todo = () => {
  return (
    <S.Layout className="layout">
      <S.Content>
        <S.Title>Todo List</S.Title>
        <TodoInput />
        <TodoList
          onCheckClick={(i) => console.log(i)}
          onDeleteClick={(i) => console.log(i)}
          items={data}
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

export default Todo;
