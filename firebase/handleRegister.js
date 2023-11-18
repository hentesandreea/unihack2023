import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "./config";
import {addUser} from "./addUser";

export const handleRegister = (email, password, name, age)=>{

    return createUserWithEmailAndPassword(auth,email,password)
        .then((response) => {
            const user = response.user;
            addUser(user.uid, user.email, name, age, [0])
            console.log(user.uid);
        })
        .catch(error => alert(error.message))
}