import React from 'react';

import Styles from "./Textarea.module.css";

import Input, { InputProps } from "../Input";

interface TextareaProps extends InputProps {}

const Textarea: React.FC<TextareaProps> = ({ label,name, as= "textarea", errors, touched }) => {
    return (
        <Input
        label={label}
        name={name}
        as={as}
        errors={errors}
        touched={touched}
        className={Styles.textarea}
        />
    );
    
};

export default Textarea;