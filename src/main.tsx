import React from 'react';
import ReactDOM from 'react-dom/client';
import { TaskList } from 'components/tasks';

import ReduxProvider from './redux/ReduxProvider.tsx';
import { ThemeProvider } from '@mui/material'

import './global.css';
import theme from "utils/theme";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ReduxProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<TaskList />
			</ThemeProvider>
		</ReduxProvider>
	</React.StrictMode>,
)
