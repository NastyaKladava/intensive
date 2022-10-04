import React from 'react';
import styles from './Button.module.css'

interface IButtonProps {
    classtype: string
    type: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode,
    handler: () => void
}

const Button: React.FC <IButtonProps> = ({ classtype, type, handler, children }) => {
    return <button className={styles[classtype]} type={type} onClick={handler}>{children}</button>;
};

export default Button;