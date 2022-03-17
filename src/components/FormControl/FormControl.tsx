import React, { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from "react-hook-form"
import "./FormControl.scss"

interface IFormControlProps {
    id: string
    placeholder: string
    label: string
    type: "email" | "password" | "text" | "number"
    register: UseFormRegisterReturn
    errors: FieldError | undefined
}

const FormControl: FC<IFormControlProps> = ({ errors, id, placeholder, type, label, register }) => {
    return (
        <div className="form__control">
            <label htmlFor={id}>{label}</label>
            <input type={type} placeholder={placeholder} id={id}{...register} />

            {errors && <div className="error">{errors.message}</div>}
        </div>
    );
};

export default FormControl;