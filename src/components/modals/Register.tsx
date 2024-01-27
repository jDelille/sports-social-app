import React, { useState } from 'react'
import Modal from './Modal';
import useRegisterModal from '../../hooks/useRegisterModal'
import useLoginModal from '../../hooks/useLoginModal';
import { AuthString } from '../../app-string/AuthString';
import Input from '../input/Input';
import { UserCredential, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app, db } from '../../firebase/config';
import { addDoc, collection } from 'firebase/firestore';

const Register: React.FC = () => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const auth = getAuth(app);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('');


    const handleRegistration = async () => {
        try {

            const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const additionalUserData = {
                email: email,
                displayName: displayName
            }

            const usersCollection = collection(db, 'users');
            await addDoc(usersCollection, {
                uid: user.uid,
                ...additionalUserData

            })

            console.log("User registered successfully!", user)
            registerModal.onClose();
        } catch (error: any) {
            console.error("Error registering user: ", error.message)
        }
    }

    const openLoginModal = () => {
        registerModal.onClose();
        loginModal.onOpen();
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
                onChange={(e) => setEmail(e.target.value)}
                label={AuthString.Email.value}
            />

            <Input
                id='displayName-input'
                disabled={false}
                type='text'
                inputMode='text'
                required
                placeholder={AuthString.DisplayNamePlaceholder.value}
                onChange={(e) => setDisplayName(e.target.value)}
                label={AuthString.DisplayName.value}
            />

            <Input
                id='password-input'
                disabled={false}
                type='password'
                inputMode='text'
                required
                placeholder={AuthString.PasswordPlaceholder.value}
                onChange={(e) => setPassword(e.target.value)}
                label={AuthString.Password.value}
            />

        </div>
    )

    const footerContent = (
        <p className='footer-content'>{AuthString.AlreadyHaveAnAccount.value}
            {" "}
            <span onClick={openLoginModal}>{AuthString.SignUp.value}</span>
        </p>
    )

    return (
        <Modal
            title={AuthString.CreateAnAccount.value}
            body={bodyContent}
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            onSubmit={handleRegistration}
            actionLabel={AuthString.SignUp.value}
            ariaLabel1={AuthString.SignUp.value}
            footer={footerContent}
        />
    )
}

export default Register