import { ref, child, get } from 'firebase/database';
import { database } from './config';

export async function getEmotionAndCausesAll() {
  try {
    const snapshot = await get(child(ref(database), '/users/'));

    if (snapshot.exists()) {
      const promises = Object.keys(snapshot.val()).map(async id => {
        const userData = await get(
          child(ref(database), `/users/${id}/listOfThoughtsID/`)
        );

        if (userData.exists()) {
          const thoughtsPromises = userData.val().map(async thoughtOfUser => {
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
      });

      const results = await Promise.all(promises);
      return results.flat();
    } else {
      console.log('Snapshot does not exist');
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}
