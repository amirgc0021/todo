import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App.tsx';

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
				<App />
			</ThemeProvider>
		</ReduxProvider>
	</React.StrictMode>,
)
