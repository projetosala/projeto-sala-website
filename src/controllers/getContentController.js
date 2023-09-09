import getJson from '../services/firebase/remoteConfig';

export default async function getContent(key) {
  try {
    const result = await getJson(key);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
