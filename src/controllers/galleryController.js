import getDocuments from '../services/firebase/firestore';

export default async function getImages() {
  try {
    const result = await getDocuments('gallery');
    const images = [];

    if (result) {
      result.forEach((snapshot) => {
        images.push({
          id: snapshot.id,
          ...snapshot.data(),
        });
      });
    }

    return images;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
}
