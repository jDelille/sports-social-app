import React, { useCallback, useEffect, useState } from 'react'
import { MdClose } from "react-icons/md";
import './ModalStyles.scss';
import { IconType } from 'react-icons';
import Button from '../button/Button';

type Props = {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    disabled?: boolean;
    body: React.ReactElement;
    footer: React.ReactElement;
    actionLabel: string;
    disableButton?: boolean;
    secondaryActionLabel?: string;
    secondaryAction?: () => void;
    title?: string;
    ariaLabel1: string;
    ariaLabel2?: string;
    icon?: IconType
}

const Modal: React.FC<Props> = (props) => {

    const { isOpen, onClose, onSubmit, secondaryAction, disabled, body, footer, actionLabel, ariaLabel1, ariaLabel2, title, icon: Icon, secondaryActionLabel } = props;

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);

        setTimeout(() => {
            onClose();
        }, 300)

    }, [disabled, onClose])

    if (!isOpen) {
        return null;
    }



    return (
        <div className='overlay'>
            <div className={showModal ? 'show-modal' : 'hide-modal'}>
                <div className="modal-header">
                    <strong>{title}</strong>
                    <MdClose onClick={handleClose} className='close-icon' size={18} color='gray' />
                </div>
                <div className="modal-body">
                    {body}
                </div>
                <div className="footer">
                    <Button
                        label={actionLabel}
                        isDisabled={disabled}
                        ariaLabel={ariaLabel1}
                        onClick={onSubmit}
                    />
                    {secondaryActionLabel && (
                        <Button
                            label={secondaryActionLabel}
                            isDisabled={disabled}
                            ariaLabel={ariaLabel2 as string}
                            onClick={secondaryAction}
                            icon={Icon}
                        />
                    )}


                    {footer}
                </div>
            </div>
        </div>
    )
}

export default Modal