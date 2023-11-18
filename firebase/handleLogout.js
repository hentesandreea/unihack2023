import {signOut} from "@firebase/auth";
import {auth} from "./config";

export const handleLogout = () => {
    signOut(auth)
        .then(() => {
            console.log("Logged of")
        })
        .catch(err => alert(err))
}