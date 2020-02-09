import React from 'react'
import { createMuiTheme, makeStyles, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import yellow from '@material-ui/core/colors/yellow'

const ThemeProvider = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      primary: orange,
      secondary: yellow
    }
  })

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
