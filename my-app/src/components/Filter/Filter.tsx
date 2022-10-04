import React from 'react';
import Button from '../Button/Button';
import { filters } from '../../utils/todoFilter';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFilter } from '../../store/slices/todoSlice';
import { filterSelector } from '../../store/selectors';
import styles from './Filter.module.css'

const Filter: React.FC = () => {
    const filter = useAppSelector(filterSelector);
    const dispatch = useAppDispatch();

    return(
      <div className={styles.filter}>
          <Button classtype='filter' type='button' handler={() => (dispatch(setFilter(filter !== 'COMPLETED'? filters.COMPLETED : filters.ALL )))}>Выполненные задачи</Button>
          <Button classtype='filter' type='button' handler={() => (dispatch(setFilter(filter !== 'NOT_COMPLETED' ? filters.NOT_COMPLETED : filters.ALL)))}>Задачи в работе</Button>
          <Button classtype='filter' type='button' handler={() => (dispatch(setFilter(filter !== 'SELECTED' ? filters.SELECTED : filters.ALL)))}>Избранные задачи</Button>
      </div>
    );
};

export default Filter;


