import React from 'react'
import Modal from './Modal';
import useRegisterModal from '../../hooks/useRegisterModal'
import useLoginModal from '../../hooks/useLoginModal';

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

            <p>Already have an account? <span onClick={openLoginModal}>Sign in</span></p>
        </div>
    )

    return (
        <Modal
            title='Create an account'
            body={bodyContent}
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
        />
    )
}

export default Register