import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import useLoginModal from '../../hooks/useLoginModal';

export interface ILoginProps { };

const Login: React.FC<ILoginProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);


    const loginModal = useLoginModal();

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setAuthing(false)
            })
    }

    const bodyContent = (
        <div className="auth-body-content">
            <input type="email" />
            <input type="password" />

            <button onClick={() => signInWithGoogle()} disabled={authing}> Sign in with google</button>

        </div>
    )

    return (
        // <div>Login
        //     <button onClick={() => signInWithGoogle()} disabled={authing}> Sign in with google</button>
        // </div>
        <Modal
            body={bodyContent}
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
        />
    )
}

export default Login