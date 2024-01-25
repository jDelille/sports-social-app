import React from 'react'
import Modal from './Modal';
import useRegisterModal from '../../hooks/useRegisterModal'
import useLoginModal from '../../hooks/useLoginModal';
import { AuthString } from '../../app-string/AuthString';

const Register: React.FC = () => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    const openLoginModal = () => {
        registerModal.onClose();
        loginModal.onOpen();
    }

    const bodyContent = (
        <div className="auth-body-content">
            <input type="email" />
            <input type="password" />

            <p>{AuthString.AlreadyHaveAnAccount.value} <span onClick={openLoginModal}>{AuthString.SignUp.value}</span></p>
        </div>
    )

    return (
        <Modal
            title={AuthString.RegisterHeaderTitle.value}
            body={bodyContent}
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
        />
    )
}

export default Register