import React from 'react'
import Modal from './Modal';
import useRegisterModal from '../../hooks/useRegisterModal'
import useLoginModal from '../../hooks/useLoginModal';
import { AuthString } from '../../app-string/AuthString';
import Input from '../input/Input';

const Register: React.FC = () => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

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
        <p className='footer-content'>{AuthString.AlreadyHaveAnAccount.value}
            {" "}
            <span onClick={openLoginModal}>{AuthString.SignUp.value}</span>
        </p>
    )

    return (
        <Modal
            title={AuthString.RegisterHeaderTitle.value}
            body={bodyContent}
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            onSubmit={() => console.log('hey')}
            actionLabel={AuthString.SignUp.value}
            ariaLabel1={AuthString.SignUp.value}
            footer={footerContent}
        />
    )
}

export default Register