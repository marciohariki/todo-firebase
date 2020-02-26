import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export default ({ children, ...rest }) => (
  <S.Layout className="layout" {...rest}>
    <S.Content>
      {children}
    </S.Content>
  </S.Layout>
)


const S = {
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
