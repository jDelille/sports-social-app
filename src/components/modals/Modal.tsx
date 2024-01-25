import React, { useCallback, useEffect, useState } from 'react'
import './ModalStyles.scss';

type Props = {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit?: () => void;
    disabled?: boolean;
    body: React.ReactElement;
    actionLabel?: string;
    disableButton?: boolean;
    secondaryActionLabel?: string;
    secondaryAction?: () => void;
    title?: string;
}

const Modal: React.FC<Props> = (props) => {

    const [showModal, setShowModal] = useState(props.isOpen);

    useEffect(() => {
        setShowModal(props.isOpen);
    }, [props.isOpen])

    const handleClose = useCallback(() => {
        if (props.disabled) {
            return;
        }

        setShowModal(false);

        setTimeout(() => {
            props.onClose();
        }, 300)

    }, [props.disabled, props.onClose])

    if (!props.isOpen) {
        return null;
    }

    return (
        <div className='overlay'>
            <div className={showModal ? 'show-modal' : 'hide-modal'}>
                <div className="modal-header">
                    <strong>{props.title}</strong>
                    <p onClick={handleClose}>close</p>
                </div>
                <div className="modal-body">
                    {props.body}
                </div>
                <div className="footer">
                    <button onClick={props.onSubmit}>{props.actionLabel}</button>
                    <button onClick={props.secondaryAction}>{props.secondaryActionLabel}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal