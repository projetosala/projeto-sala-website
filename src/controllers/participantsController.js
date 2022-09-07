import getDocuments from '../services/firebase/firestore';

export default async function getParticipants() {
  try {
    const result = await getDocuments('participants');
    const participants = [];

    if (result) {
      result.forEach((snapshot) => {
        participants.push({
          id: snapshot.id,
          ...snapshot.data(),
        });
      });
    }

    return participants;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
}
