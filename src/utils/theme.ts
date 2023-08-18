import { createTheme } from '@mui/material'

export default createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#f2f2f2",
			light: "#ebebeb",
			contrastText: "#000"
		},
		secondary: {
			main: "#4b82ef",
			contrastText: "#fff"
		}
	},
	spacing: [10, 15, 20, 40],
	typography: {
		h1: {
			fontSize: "37px",
		},
		h2: {
			fontSize: "25px"
		},
		body2: {
			fontSize: "17px"
		}
	},
	components: {
		MuiListItemButton: {
			styleOverrides: {
				root: {
					paddingLeft: 0,
					borderRadius: "5px"
				}
			}
		}
	}
});