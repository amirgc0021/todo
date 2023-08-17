import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import ReduxProvider from './redux/ReduxProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ReduxProvider>
			<App />
		</ReduxProvider>
	</React.StrictMode>,
)
