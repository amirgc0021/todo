import './App.css';
import { useSelector } from 'react-redux';
import type { AppState } from 'redux/store';
import {ToDoItem} from './components/todoItem';

function App() {
	const list = useSelector((state: AppState) => state.listSlice.todoList)
	return (
		<div>
			<h1>To do list</h1>
			
			{list.map(item => <ToDoItem item={item} />)}
		</div>
	)
}

export default App;
