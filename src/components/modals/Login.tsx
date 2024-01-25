import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import useLoginModal from '../../hooks/useLoginModal';
import useRegisterModal from '../../hooks/useRegisterModal';

export interface ILoginProps { };

const Login: React.FC<ILoginProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);


    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

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

    const openRegisterModal = () => {
        loginModal.onClose();
        registerModal.onOpen();
    }

    const bodyContent = (
        <div className="auth-body-content">
            <input type="email" />
            <input type="password" />

            <button onClick={() => signInWithGoogle()} disabled={authing}> Sign in with google</button>
            <p>Don't have an account? <span onClick={openRegisterModal}>Sign up</span></p>

        </div>
    )

    return (
        <Modal
            title='Login'
            body={bodyContent}
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
        />
    )
}

export default Login