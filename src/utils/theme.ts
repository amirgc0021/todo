import { createTheme } from '@mui/material'

export default createTheme({
	palette: {
		mode: "dark",
		background:{
			default: "#121212"
		},
		primary: {
			main: "#121212",
			contrastText: "#fff"
		},
		secondary: {
			main: "#1c3d52",
			light: "#F6F2F0",
			contrastText: "#fff "
		},
		contrastThreshold: 4.5,
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