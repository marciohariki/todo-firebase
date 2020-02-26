import React from 'react';
import * as firebase from "firebase/app";
import * as firebaseui from 'firebaseui';
import styled from 'styled-components';

import Layout from '../components/Layout';
import firebaseUiConfig from '../config/firebaseUi'

export default () => {
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', firebaseUiConfig);
  return (
    <Layout>
      <h1>Login</h1>
      <S.LoginProviders id="firebaseui-auth-container" />
    </Layout>
  )
}

const S = {
  LoginProviders: styled.div`
    ul {
      padding: 0;
    }
    li {
      list-style: none;
    }
  `
}
