// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Footer from './Footer.jsx'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './constant/theme.jsx'
import TreeCard from './components/card_tree.jsx'
import TopNavBar from './components/side_navbar.jsx'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TopNavBar/>
        <TreeCard/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App
