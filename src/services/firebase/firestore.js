import { getFirestore, collection, getDocs } from 'firebase/firestore';
import initializeFirebase from './config';

export default async function getDocuments(path) {
  const firebase = await initializeFirebase();
  const firestore = getFirestore(firebase);
  return getDocs(collection(firestore, path));
}
