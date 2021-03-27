import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC_xIJjDQLEJDcCjNKWWB8cKtsN-qghvKs',
  authDomain: 'instagram-clone-48fe0.firebaseapp.com',
  projectId: 'instagram-clone-48fe0',
  storageBucket: 'instagram-clone-48fe0.appspot.com',
  messagingSenderId: '680779038450',
  appId: '1:680779038450:web:61b82c4751d4eea5ac5a6b',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
