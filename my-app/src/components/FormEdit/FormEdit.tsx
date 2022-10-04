import React, {forwardRef, useRef} from 'react';
import { useAppSelector} from '../../hooks';
import { isTextInpValid } from '../../store/selectors';
import styles from './FormEdit.module.css'


interface IFormEditProps {
	ref: React.RefObject<HTMLInputElement> | null,
	value: string,
	notice: string | null,
	handleUpdateText: (e: { target: HTMLInputElement }) => void,
	handleTodo: () => void,
}


const FormEdit = forwardRef<HTMLInputElement, IFormEditProps> (({ value, notice, handleUpdateText, handleTodo}, ref) => {
	const isValid = useAppSelector(isTextInpValid);

	return (
	  <form onSubmit={handleTodo} className={styles.form}>
		<div className={styles.formEnter}>
			<input
			ref={ref}
		    value={value}
		    onChange={handleUpdateText}
		    className={styles.formField}
			/> 
			{!isValid && <span className={styles.formNotice}>{notice}</span>}
		</div>
	  </form>)});
  
  export default FormEdit;