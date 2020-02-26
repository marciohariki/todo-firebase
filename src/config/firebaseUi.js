import * as firebase from "firebase/app";

export default {
  signInSuccessUrl: '/todo',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/tosUrl',
  privacyPolicyUrl: '/privacyPolicyUrl'
};
