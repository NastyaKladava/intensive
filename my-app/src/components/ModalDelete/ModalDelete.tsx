import React from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { isShowModalDelSelector, deletedTodoSelector } from '../../store/selectors';
import { setShowModal } from '../../store/slices/mainSlice';
import Button from '../Button/Button';
import { deleteTodo } from '../../store/thunks';
import styles from './ModalDelete.module.css'

interface ITemplateProps {
    closeModal: () => void 
}

const Template: React.FC<ITemplateProps> = ({closeModal}) => {
    const {id, text, date} = useAppSelector(deletedTodoSelector);
    const dispatch = useAppDispatch();
    const handleDelete = ():void => {
        dispatch(deleteTodo(id));
        closeModal();
    }; 

    return(
        <div className={styles.modalBox}>
            <div className={styles.modal}>
                <Button classtype='close' type='button' handler={closeModal} />
                <div className={styles.modalContent}>
                    <span className={styles.modalQuestion}>Вы действительно хотите удалить задачу?</span>
                    <span className={styles.modalTodo}>{text}</span>
                    <span className={styles.modalData}>{date}</span>
                    <div className={styles.modalBtns}>
                        <Button classtype='btn' type='reset' handler={closeModal}>Отмена</Button>
                        <Button classtype='btn' type='button' handler={handleDelete}>Да, удалить</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ModalDelete: React.FC  = () => {
    const domNode = document.getElementById('modalDelete');
    const isShowModal = useAppSelector(isShowModalDelSelector);
    const dispatch = useAppDispatch();
    const closeModal = ():void => {
        dispatch(setShowModal(false))
    };

    if (domNode && isShowModal) {
        return ReactDOM.createPortal(<Template closeModal={closeModal}/>, domNode)
    } else { return <></>}
};

export default ModalDelete;