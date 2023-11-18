import {signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "./config";

export const handleLogin = (email, password)=>{

    return signInWithEmailAndPassword(auth,email,password)
        .then(userCredentials => {
            return true;
        })
        .catch(error => {
            alert(error.message);
            return false;
        })
}