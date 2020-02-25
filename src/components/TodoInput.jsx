import React, { useState } from 'react';
import { Button, Input } from 'antd';
import styled from 'styled-components';

export default ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const onClick = () => {
    onSubmit(value);
    setValue('')
  };
  return (
    <S.Content>
      <Input
        placeholder="Add a Todo"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button
        type="primary"
        icon="plus-circle"
        onClick={onClick}
      />
    </S.Content>
  )
}

const S = {
  Content: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    input {
      margin-right: 16px;
    }
  `
};
