import React, {useRef, useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks'; 
import {  toggleFavourite, changeTodo } from '../../store/thunks';
import Button from '../Button/Button';
import PopUp from '../PopUp/PopUp';
import { editingTaskSelector } from '../../store/selectors';
import FormEdit from '../FormEdit/FormEdit';
import styles from './TodoItem.module.css';


interface ITodoItemProps {
  id: string, 
  text:string,
  date: string,
  isFavourite: boolean, 
  isCompleted:boolean
};

const TodoItem: React.FC<ITodoItemProps> = ({ id, text, date, isFavourite, isCompleted}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isShowPopUp, setIsShowPopUp] = useState<boolean>(false);
  const [editInpValue, setEditInpValue]= useState<string>(text);
  const todoItemClass = isCompleted ? 'todoItemTextDone' : 'todoItemText';

  const handleIsShowPopUp = (value:boolean):void => setIsShowPopUp(value);

  const editTask = useAppSelector(editingTaskSelector);
  const dispatch = useAppDispatch();

  

  const handleIsFavourite = ():void => {
      dispatch(toggleFavourite(id))
  };

  const tooglePopUp = () => {
    setIsShowPopUp(true);
  };

  const handleTodo = () => {
		if (editInpValue.length > 0) {
      dispatch(changeTodo({editInpValue, id}))
      setEditInpValue('')
		}
  }

	const handleUpdateText = (e: { target: HTMLInputElement }) : void => {
    setEditInpValue((e.target.value));
	};


//   useEffect(() => {
//     let handler = (e: { target: HTMLDivElement}) => {
//       if (!popUpRef.current.contains(e.target)) {
//         setIsShowPopUp(false);
//       }
//     };

//     document.addEventListener('click', handler);

//     return () => {
//       document.removeEventListener('click', handler)
//     }
// }), [];

  return (
    <li className={styles.todoItem}>
      <div className={styles.todoItemBox}>
        <div className={styles.todoItemInfo}>
          {isFavourite && <Button classtype='fav' type='button' handler={handleIsFavourite}/>}
          {editTask === id ?  <FormEdit ref={inputRef} value={editInpValue} notice={null} handleUpdateText={handleUpdateText}  handleTodo={handleTodo} />
          : <span className={todoItemClass}>{text}</span>}
        </div>
        {!isShowPopUp ? <Button  classtype='menu' type='button' handler={tooglePopUp}/> 
          : <PopUp inpRef={inputRef} id={id} text={text} date={date} isFavourite={isFavourite} isCompleted={isCompleted}  handleIsShowPopUp={handleIsShowPopUp} / >}
      </div>
    </li>
  );
};

export default TodoItem;