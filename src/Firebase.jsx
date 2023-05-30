import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA5IvhIHkOfMgp2ktAHxDzLPiB2dDHDASM",
    authDomain: "fangtagebuch-6db8d.firebaseapp.com",
    databaseURL: "https://fangtagebuch-6db8d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fangtagebuch-6db8d",
    storageBucket: "fangtagebuch-6db8d.appspot.com",
    messagingSenderId: "1084873066996",
    appId: "1:1084873066996:web:b93984f2764e064a5c51a1"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const database = getDatabase(app);
export const authentication = getAuth(app);
/**export const fängeInDB = ref(database, `users/${userId}/fänge`); */
