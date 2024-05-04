import { createTheme, alpha, getContrastRatio } from '@mui/material/styles'

const teaBase = "#009688";   //teal[500]
const tealMain = alpha(teaBase, 0.7);

export const theme = createTheme({
  palette:{
    primary: {
      main: tealMain,
      light: alpha(tealMain, 0.5),
      dark: alpha(tealMain, 0.9),
      blogTextbg: "#F4F2DE",
      contrastText: getContrastRatio(tealMain, '#fff') > 4.5 ? '#fff' : '#111',
    }
  }
})