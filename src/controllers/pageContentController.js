import getDocuments from '../services/firebase/firestore';

export default async function getPageContent(pageId) {
  try {
    const result = await getDocuments('texts');
    let pageContent = {};

    if (result) {
      result.docs.forEach((snapshot) => {
        if (snapshot.id === pageId) {
          pageContent = {
            id: snapshot.id,
            ...snapshot.data(),
          };
        }
      });
    }

    return pageContent;
  } catch (error) {
    console.error(error);
    return null;
  }
}
