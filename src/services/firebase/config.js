import { initializeApp } from 'firebase/app';
import axios from 'axios';

async function fetchFirebaseConfig() {
  const response = await axios.get('/api/firebase-configs');
  return response.data;
}

async function initializeFirebase() {
  const firebaseConfig = await fetchFirebaseConfig();
  const firebaseApp = initializeApp(firebaseConfig);
  return firebaseApp;
}

export default initializeFirebase;
