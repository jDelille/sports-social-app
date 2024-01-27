import React, { useEffect, useState } from 'react';
import { User, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import useLoginModal from '../hooks/useLoginModal';
import { app } from '../firebase/config'

export interface IHomeProps { };

const Home: React.FC<IHomeProps> = () => {

    const auth = getAuth(app);
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

    // <button onClick={() => signOut(auth)}>Sign out</button>


    return (
        <>
            <h1>Home Page</h1>
        </>
    );
};

export default Home;