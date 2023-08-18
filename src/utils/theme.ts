import { createTheme } from '@mui/material'

export default createTheme({
	palette: {

	},
	spacing: [20, 35, 5],
	typography: {
		h1: {
			fontSize: "37px"
		},
		h2: {
			fontSize: "25px"
		}
	},
	components:{
		MuiListItemButton: {
			styleOverrides: {
				root: {
					paddingLeft: 0
				}
			}
		}
	}
})

// mode: "dark",
// primary: {
// 	main: "#414141",
// 	contrastText: "#fff"
// },
// secondary: {
// 	main: "#fff",
// 	contrastText: "#fff "
// },
// contrastThreshold: 4.5,