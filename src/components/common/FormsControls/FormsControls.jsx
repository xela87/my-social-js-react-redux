import React from 'react';
import styles from './FormControls.module.css'

const FormControl = ({input,meta: {touched, error}, children, ...props}) =>{
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")} >
            <div>
                {children}
            </div>
            {hasError && <span className={styles.error}>{error}</span>}
        </div>
    );
}

export const TextArea = (props) => {
    const {input,meta,...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps} /></FormControl>
};

export const Input = (props) => {
    const {input,meta,...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps} /></FormControl>
};
