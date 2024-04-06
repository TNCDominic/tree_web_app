// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Footer from './Footer.jsx'
import { ThemeProvider, createTheme, alpha, getContrastRatio} from '@mui/material/styles'

import TreeCard from './components/card_tree.jsx'
import TopNavBar from './components/side_navbar.jsx'
import { teal } from '@mui/material/colors'

const teaBase = "#009688";   //teal[500]
const tealMain = alpha(teaBase, 0.7);

const theme = createTheme({
  palette:{
    primary: {
      main: tealMain,
      light: alpha(tealMain, 0.5),
      dark: alpha(tealMain, 0.9),
      contrastText: getContrastRatio(tealMain, '#fff') > 4.5 ? '#fff' : '#111',
    }
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <TopNavBar/>
          <TreeCard/>
        </div>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App
