import {database} from './config'
import {child, get, ref, set, update} from 'firebase/database'

export async function addUser(id, email, name, age, listOfThoughtsID) {

    const postData = {
        id: id,
        email: email,
        name: name,
        age: age,
        listOfThoughtsID: listOfThoughtsID,
    };

    await set(ref(database, 'users/' + id), postData)
}