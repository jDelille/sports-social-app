import React, { useEffect, useState } from 'react';
import { User, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import useLoginModal from '../hooks/useLoginModal';
import firebaseApp from '../firebase/config'

export interface IHomeProps { };

const Home: React.FC<IHomeProps> = () => {

    const auth = getAuth(firebaseApp);
    const loginModal = useLoginModal();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Subscribe to the authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        // Unsubscribe when the component unmounts
        return () => unsubscribe();
    }, [auth]);

    return (
        <>
            {/* Your Home page content goes here */}
            <h1>Welcome to the Home Page</h1>

            {user ? (
                <button onClick={() => signOut(auth)}>Sign out</button>
            ) : (
                <button onClick={loginModal.onOpen}>Sign in</button>
            )}
        </>
    );
};

export default Home;