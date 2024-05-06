import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Homepage from './Homepage.jsx'
import BlogContent from './Content.jsx';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="blogs" element={<App/>}/>
        <Route path="blogs/content" element={<BlogContent/>}/>
      </Routes>
    </main>
  </BrowserRouter>

        
  </React.StrictMode>,
)
