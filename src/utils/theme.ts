import { createTheme } from '@mui/material'

export default createTheme({
	palette: {
		primary: {
			main: "#0e1e2b",
			dark: "#010305",
			light: "#1c3d52",
			contrastText: "#fff"
		},
		secondary: {
			main: "#1c3d52",
			light: "#F6F2F0",
			contrastText: "#000"
		},
	},
	spacing: [20, 42, 5],
	typography: {
		h1: {
			fontSize: "37px"
		},
		h2: {
			fontSize: "23px"
		}
	}
})