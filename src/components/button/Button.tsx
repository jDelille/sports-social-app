import React from 'react'
import { IconBaseProps, IconType } from 'react-icons'
import './ButtonStyles.scss';

type ButtonProps = {
    label?: string;
    isDisabled?: boolean;
    icon?: IconType;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    ariaLabel: string;
    tabIndex?: number;
    iconProps?: IconBaseProps; // Optional props for the icon
}

const Button: React.FC<ButtonProps> = (props) => {
    const { label, isDisabled, icon: Icon, onClick, ariaLabel, tabIndex, iconProps } = props;

    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className='button'
            aria-label={ariaLabel}
            tabIndex={tabIndex}
        >
            {Icon && <Icon size={18} {...iconProps} className='button-icon' />}
            {label}
        </button>
    )
}

export default Button