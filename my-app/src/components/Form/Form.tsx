import React from 'react';
import { useAppSelector} from '../../hooks';
import { isTextInpValid } from '../../store/selectors';
import styles from './Form.module.css'



interface IFormProps {
	value: string,
	notice: string | null,
	handleUpdateText: (e: { target: HTMLInputElement }) => void,
	handleTodo: (e: React.FormEvent<HTMLFormElement>) => void,
	type: 'submit' | 'button'
	btnText: string
}


const Form: React.FC <IFormProps> = ({value, notice, handleUpdateText, handleTodo, type, btnText}) => {
	const isValid = useAppSelector(isTextInpValid)


	return (
	  <form onSubmit={handleTodo} className={styles.form}>
		<div className={styles.formEnter}>
			<input
			placeholder='Добавить новую задачу...'
		    value={value}
		    onChange={handleUpdateText}
		    className={styles.formField}
			/> 
			{!isValid && <span className={styles.formNotice}>{notice}</span>}
		</div>
		<button type={type} className={styles.formBtn}>{btnText}</button>
	  </form>
	);
  };
  
  export default Form;