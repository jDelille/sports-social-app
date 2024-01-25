import React from 'react';
import './InputStyles.scss';

type InputProps = {
    id: string;
    label: string;
    disabled?: boolean;
    type?: string;
    required?: boolean;
    placeholder: string;
    onChange?: (value: any) => void;
    inputMode: 'search' | 'text' | 'email' | 'tel' | 'url' | 'numeric' | 'decimal' | 'none';
}

const Input: React.FC<InputProps> = (props) => {

    const { id, label, disabled, type, required, placeholder, onChange, inputMode } = props

    return (
        <div className='input-wrapper'>
            <label className='input-label'>{label}</label>
            <input
                id={id}
                disabled={disabled}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                required={required}
                inputMode={inputMode}
                className='input'
            />
        </div>
    );
};

export default Input;