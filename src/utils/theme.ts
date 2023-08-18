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
	spacing: [10, 15, 20],
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
		},
		MuiButton: {
			defaultProps: {
				disableRipple: true
			},
			variants: [
				{
					props: { variant: "text" },
					style: { color: "#000" }
				},
			],
			styleOverrides: {
				contained: ({theme}) => {
					return {
						backgroundColor: theme.palette.secondary.main,
						color: theme.palette.secondary.contrastText,
					}
				},
				outlined: ({theme}) => {
					return {
						borderColor: theme.palette.secondary.main,
						color: theme.palette.secondary.main,
					}
				}
			}
		},
		MuiCheckbox: {
			defaultProps: {
				// "color": "secondary"
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