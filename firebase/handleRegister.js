import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "./config";
import {addUser} from "./addUser";

export const handleRegister = (email, password)=>{

    return createUserWithEmailAndPassword(auth,email,password)
        .then((response) => {
            const user = response.user;
            addUser(user.uid, user.email, "George", 18, [0])
            console.log(user.uid);
        })
        .catch(error => alert(error.message))
}