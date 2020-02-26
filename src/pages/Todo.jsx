import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Skeleton } from 'antd';
import { map } from 'lodash'

import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { addTodo, listTodos } from '../services/TodoService';
import Layout from '../components/Layout';

export default () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listTodos().then(snapshot => {
      setLoading(false);
      console.log(snapshot)
      setItems(snapshot.docs.map(i => i.data()))
    });
  }, [loading]);

  const onSubmit = async i => {
    const newItem = {
      id: uuidv4(),
      content: i,
      done: false
    };
    setItems([...items, newItem]);
    await addTodo(newItem);
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
    <Layout>
      <S.Title>Todo List</S.Title>
      {loading ?
        <Skeleton active />
      : (
        <>
          <TodoInput onSubmit={onSubmit} />
          <TodoList
            onCheckClick={onCheckClick}
            onRemoveClick={onRemoveClick}
            items={items}
          />
        </>
        )
      }

    </Layout>
  );
};

const S = {
  Title: styled.h1`
  `,
};
