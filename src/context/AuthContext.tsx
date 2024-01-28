import { createContext, useContext, useEffect, useState } from "react";
import { User, UserCredential, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, db, upload, usersCollection } from "../firebase/config";
import useRegisterModal from "../hooks/useRegisterModal";
import { addDoc, collection, onSnapshot } from "firebase/firestore";


export const AuthContext = createContext<any>(null);

export function useAuth() {
    return useContext(AuthContext);
}

let userRef = collection(db, "users");
const auth = getAuth(app);

export const getCurrentUser = (setCurrentUser: any) => {
    onSnapshot(userRef, (response) => {
        setCurrentUser(
            response.docs
                .map((docs) => {
                    return { ...docs.data(), id: docs.id };
                })
                .filter((item: any) => {
                    return item.email === auth.currentUser?.email
                })
        )
    })
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const auth = getAuth(app);

    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const registerModal = useRegisterModal();

    async function signup(email: string, password: string, displayName: string, name: string, photo: File) {
        try {
            const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const additionalUserData = {
                email: email,
                displayName: displayName,
                name: name,
            };

            await addDoc(usersCollection, {
                uid: user.uid,
                ...additionalUserData,
            });

            if (photo) {
                upload(photo, user)
            }


            console.log('User registered successfully!', user);
            registerModal.onClose();
        } catch (error: any) {
            console.error('Error registering user: ', error.message);
            throw error;
        }
    }





    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);

        });

        return unsubscribed;
    }, []);


    const value = {
        currentUser,
        signup,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}


