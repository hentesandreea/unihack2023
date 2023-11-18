import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth , getReactNativePersistence} from '@firebase/auth';
import {getDatabase} from "@firebase/database";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyBT49CudtX8p-cxmWaxdZBLz7gGX9oxqI8",
    authDomain: "unihack2023-piratzii.firebaseapp.com",
    databaseURL: "https://unihack2023-piratzii-default-rtdb.firebaseio.com/",
    projectId: "unihack2023-piratzii",
    storageBucket: "unihack2023-piratzii.appspot.com",
    messagingSenderId: "786796766812",
    appId: "1:786796766812:web:767c101aa06b6d1980a899",
    measurementId: "G-L0YEVJWMCF"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});



export {auth, database}