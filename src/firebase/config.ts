import { initializeApp } from "firebase/app"
import { updateProfile } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


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
const storage = getStorage()

// Storage

export async function upload(file: any, currentUser: any, setLoading?: any) {
    const fileRef = ref(storage, currentUser.uid + '.png');


    const snapshot = await uploadBytes(fileRef, file);

    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, { photoURL });

    alert('uploaded file');
}

// collections
const usersCollection = collection(db, 'users');

export { app, db, usersCollection };