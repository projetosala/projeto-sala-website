import getJson from '../services/firebase/remoteConfig';

export default async function getContent(key) {
  try {
    return await getJson(key);
  } catch (error) {
    console.error(error);
    return null;
  }
}
