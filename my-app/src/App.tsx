import React from 'react';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import { useAppSelector, useAppDispatch } from './hooks';
import { textInputSelector, isShowModalDelSelector, serverErrorSelector, loadingSelector } from './store/selectors';
import { addTodo } from './store/thunks';
import { updateInputText, updateTextInputValidation } from './store/slices/mainSlice';
import ModalDelete from './components/ModalDelete/ModalDelete';
import Filter from './components/Filter/Filter';
import { validateTaskInput } from './utils/inputValidation';



const App:React.FC = () => {
	const DATA_TYPE = 'ru-RU';
	const LIMIT = 160;
	const date = new Date().toLocaleDateString(DATA_TYPE);

	const dispatch = useAppDispatch();
	const error = useAppSelector(serverErrorSelector);
	const isLoading = useAppSelector(loadingSelector);
	const isShowModal = useAppSelector(isShowModalDelSelector);
    const inputText = useAppSelector(textInputSelector);
	
    const exceedNum = inputText.length - LIMIT;
	

	const handleTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputText.length > 0) {
			dispatch(addTodo({inputText, date}));
			dispatch(updateInputText(''));
		}
	}

	const handleUpdateText = (e: { target: HTMLInputElement }) : void => {
		dispatch(updateInputText(e.target.value));
		const isValid = validateTaskInput(e.target.value);
		isValid ? dispatch(updateTextInputValidation(true)) : dispatch(updateTextInputValidation(false));
	};

	return ( 
	  <>
	    <header className='header'>
		    <div className='container'>
			    <h1 className='mainHeader'>Список Задач</h1>
		    </div>
	    </header>
	    <main>
		    <div className='container container--flex'>
				{isLoading && <p className='loadingMessage'>Загрузка...</p>}
				{error && <p className='errorMessage'>Возникла ошибка: {error}</p>}
			    <Form value={inputText} notice={`Превышен лимит текста задачи на ${exceedNum} символов`} handleUpdateText={handleUpdateText} handleTodo={handleTodo} type='submit' btnText='Добавить'/>
			    <Filter/>
                <TodoList />
	            {isShowModal && <ModalDelete/>}
		    </div>
	    </main>
	</>
  );
}

export default App;