import { TaskList } from 'components/tasks';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material'


function App() {
	// const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);

	const theme = createTheme({
		palette: {
			primary: {
				main: "#E8EDE7"
			},
			secondary: {
				main: "#81BECE"
			}
		},
		spacing: [20, 42, 5],
		typography: {
			h2: {
				fontSize: "23px"
			}
		}
	})

	return (
		<ThemeProvider theme={theme}>
			<div>

				<h1>To do list</h1>

				<TaskList />


				{/* <button onClick={() => setOpenAddTaskModal(true)}>open Modal</button> */}
			</div>
		</ThemeProvider>
	)
}

export default App;
