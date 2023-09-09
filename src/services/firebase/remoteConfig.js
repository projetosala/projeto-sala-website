import { fetchAndActivate, getRemoteConfig, getValue } from 'firebase/remote-config';
import initializeFirebase from './config';

export default async function getJson(key) {
  const firebase = await initializeFirebase();
  const remoteConfig = getRemoteConfig(firebase);

  remoteConfig.settings = {
    minimumFetchIntervalMillis: 3600000,
  };

  await fetchAndActivate(remoteConfig);
  return getValue(remoteConfig, key).asString();
}
