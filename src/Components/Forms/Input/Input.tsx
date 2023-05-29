import React from "react";

import Styles from "./Input.module.scss";

import { Field, ErrorMessage } from "formik";

export interface InputProps {
    label: string;
    name: string;
    type?: string;
    as?: string;
    errors?: string;
    touched?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, name, type="text", as, errors, touched, children, className }) => {
    return (
        <fieldset className={Styles.formGroup}>
            <label htmlFor={name} className={Styles.label}>
            {label}:
            </label>

            <Field
            name={name}
            type={type}
            as={as ? as : undefined}
            className={`${className ? className : Styles.input} ${touched && errors && Styles.error}`}
            >
            {children}
            </Field>
            // <ErrorMessage name={name} component="div" className={Styles.errorMsg} />
        </fieldset>
    );
};

export default Input;