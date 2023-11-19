import { ref, child, get } from 'firebase/database';
import { database } from './config';

export async function getEmotionAndCauses({ id }) {
  try {
    const snapshot = await get(
      child(ref(database), `/users/${id}/listOfThoughtsID/`)
    );

    if (snapshot.exists()) {
      const thoughtsPromises = snapshot.val().map(async thoughtOfUser => {
        const thoughtSnapshot = await get(
          child(ref(database), `/thoughts/${thoughtOfUser}/`)
        );

        if (thoughtSnapshot.exists()) {
          let emotion = {};
          emotion['causes'] = thoughtSnapshot.val()['listOfCouses'];
          emotion['date'] = thoughtSnapshot.val()['date'];

          let response = {};
          response[thoughtSnapshot.val()['selectedEmotion']] = emotion;

          return response;
        }
      });

      const thoughtsResults = await Promise.all(thoughtsPromises);
      return thoughtsResults.filter(result => result !== undefined);
    } else {
      console.log('No data available');
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// make an objet by dates and generate the most predominant feelings

// give me the feelings from the last week, month, year
