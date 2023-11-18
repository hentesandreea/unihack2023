import {database} from "./config";
import {ref, set} from "firebase/database";

export const addThought = async (thoughtId, note, selectedEmotion, listOfCouses, userId, date) => {

    const postData = {
        thoughtId: thoughtId,
        note: note,
        selectedEmotion: selectedEmotion,
        listOfCouses: listOfCouses,
        userId: userId,
        date: date
    };

    await set(ref(database, 'thoughts/' + thoughtId), postData);

}