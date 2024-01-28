import React, { useState } from 'react'
import Modal from './Modal';
import Input from '../input/Input';
import useRegisterModal from '../../hooks/useRegisterModal'
import useLoginModal from '../../hooks/useLoginModal';
import { AuthString } from '../../app-string/AuthString';
import { useAuth } from '../../context/AuthContext';


const Register: React.FC = () => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const auth = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('');
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('./assets/avatar-placeholder.png')
    const [photo, setPhoto] = useState(null);

    const { signup } = auth;

    const handleRegistration = async () => {
        try {
            await signup(email, password, displayName, name, photo);
        } catch (error: any) {
            console.error("Error registering user: ", error.message)
        }
    }

    const openLoginModal = () => {
        registerModal.onClose();
        loginModal.onOpen();
    }


    const handlePhotoChange = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }



    const bodyContent = (
        <div className="auth-body-content">
            <Input
                id='name-input'
                disabled={false}
                type='text'
                inputMode='text'
                required
                onChange={(e) => setName(e.target.value)}
                label={AuthString.Name.value}
            />

            <Input
                id='email-input'
                disabled={false}
                type='email'
                inputMode='email'
                required
                onChange={(e) => setEmail(e.target.value)}
                label={AuthString.Email.value}
            />

            <Input
                id='displayName-input'
                disabled={false}
                type='text'
                inputMode='text'
                required
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

            <input type='file' onChange={handlePhotoChange} />
            <img alt='avatar' className='avatar' src={photoURL} />

        </div>
    )

    const footerContent = (
        <p className='footer-content'>{AuthString.AlreadyHaveAccount.value}
            {" "}
            <span onClick={openLoginModal}>{AuthString.SignUp.value}</span>
        </p>
    )

    return (
        <Modal
            title={AuthString.CreateAccount.value}
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