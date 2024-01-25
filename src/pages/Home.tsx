import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import useLoginModal from '../hooks/useLoginModal';

export interface IHomeProps { };

const Home: React.FC<IHomeProps> = (props) => {

    const auth = getAuth();
    const loginModal = useLoginModal();

    return (
        <>
            {/* Your Home page content goes here */}
            <h1>Welcome to the Home Page</h1>
            <button onClick={loginModal.onOpen}>Sign in</button>
            <button onClick={() => signOut(auth)}>Sign out</button>
        </>
    );
};

export default Home;