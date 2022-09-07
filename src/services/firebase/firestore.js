import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebase from './config';

export const firestore = getFirestore(firebase);

export default function getDocuments(path) {
  return getDocs(collection(firestore, path));
}
