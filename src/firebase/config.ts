import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

export const config = {
    firebaseConfig: {
        apiKey: "AIzaSyAXuBHxbUqF2X1UM7zKwYVJ_5Eyk2GNItE",
        authDomain: "sports-social-app-e0209.firebaseapp.com",
        projectId: "sports-social-app-e0209",
        storageBucket: "sports-social-app-e0209.appspot.com",
        messagingSenderId: "43932778853",
        appId: "1:43932778853:web:a0a8eec0c9b293e07b618c"
    }
}

const app = initializeApp(config.firebaseConfig)

const db = getFirestore(app);

export { app, db };