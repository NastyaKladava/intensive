import React from 'react';
import Button from '../Button/Button';
import { useAppDispatch} from '../../hooks';
import { toggleFavourite, toggleCompleted } from '../../store/thunks';
import { setDeletedTodo, setShowModal, updateEditingTask } from '../../store/slices/mainSlice';
import styles from './PopUp.module.css'


interface IPopUpProps {
    id: string,
    inpRef: React.RefObject<HTMLInputElement> | null,
    text: string,
    date: string,
    isFavourite: boolean, 
    isCompleted:boolean,
    handleIsShowPopUp: (value:boolean) => void,
}

const PopUp: React.FC <IPopUpProps>= ({id, inpRef, text, date, isFavourite, isCompleted, handleIsShowPopUp}) => {
    const dispatch = useAppDispatch();

    const handleIsFavourite = ():void => {
        dispatch(toggleFavourite(id));
        handleIsShowPopUp(false);
    };

    const handleIsCompleted = ():void => {
        dispatch(toggleCompleted(id)); 
        handleIsShowPopUp(false);   
    };

    const handleIsShowModalDel = (): void => {
        dispatch(setShowModal(true));
        handleIsShowPopUp(false);
        dispatch(setDeletedTodo({id, text, date}))
    };

    const handleIsEdit = (): void => {
        // inpRef?.current?.focus();
       dispatch(updateEditingTask(id));
       handleIsShowPopUp(false);
    };



    return (
    <div className={styles.overlay}>
        <div  className={styles.popUpContainer}>
            <Button classtype='menuBtn' type='button' handler={handleIsFavourite}>{!isFavourite ? 'в избранное' : 'удалить из избранного'}</Button>
            <Button classtype='menuBtn' type='button' handler={handleIsCompleted}>{isCompleted ? 'выполнено':'в работе'}</Button>
            <Button classtype='menuBtn' type='button' handler={handleIsEdit}>редактировать</Button>
            <Button classtype='menuBtn' type='button' handler={handleIsShowModalDel}>удалить</Button>
        </div>
    </div>
    );
};

export default PopUp;