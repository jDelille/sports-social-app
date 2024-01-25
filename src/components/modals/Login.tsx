import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import useLoginModal from '../../hooks/useLoginModal';
import useRegisterModal from '../../hooks/useRegisterModal';
import { AuthString } from '../../app-string/AuthString';
import { FcGoogle } from "react-icons/fc";
import Input from '../input/Input';


export interface ILoginProps { };

const Login: React.FC<ILoginProps> = () => {
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
            <Input
                id='email-input'
                disabled={false}
                type='email'
                inputMode='email'
                required
                placeholder={AuthString.EmailPlaceholder.value}
                onChange={(e) => console.log(e.target.value)}
                label={AuthString.Email.value}
            />

            <Input
                id='password-input'
                disabled={false}
                type='password'
                inputMode='text'
                required
                placeholder={AuthString.PasswordPlaceholder.value}
                onChange={(e) => console.log(e.target.value)}
                label={AuthString.Password.value}
            />


        </div>
    )

    const footerContent = (
        <p className='footer-content'>{AuthString.DontHaveAnAccount.value}
            {" "}
            <span onClick={openRegisterModal}>{AuthString.SignUp.value}</span>
        </p>
    )

    return (
        <Modal
            title={AuthString.LoginHeaderTitle.value}
            body={bodyContent}
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
            onSubmit={() => console.log('Login clicked')}
            actionLabel={AuthString.Login.value}
            ariaLabel1={AuthString.Login.value}
            ariaLabel2={AuthString.GoogleButtonAriaLabel.value}
            secondaryAction={() => signInWithGoogle()}
            secondaryActionLabel={AuthString.SignInWithGoogle.value}
            icon={FcGoogle}
            footer={footerContent}
        />
    )
}

export default Login