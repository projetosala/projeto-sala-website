import { getStorage, ref, listAll } from 'firebase/storage';
import firebase from './config';

export const storage = getStorage(firebase);

export default function getDocuments(path) {
  const documentsRef = ref(storage, path);

  return listAll(documentsRef);
}
