import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBb1EntIr2950jgpke_bd7XkrjbKiKwO0k",
    authDomain: "fir-crud-d479e.firebaseapp.com",
    projectId: "fir-crud-d479e",
    storageBucket: "fir-crud-d479e.appspot.com",
    messagingSenderId: "218592535835",
    appId: "1:218592535835:web:f8c989eb97504b01d19fbe",
    measurementId: "G-GMRR3T58KG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);