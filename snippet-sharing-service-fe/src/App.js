import './style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CreateSnippet } from './components/CreateSnippet.js';
import { GetSnippets } from './components/GetSnippets.js';
import { ViewSnippet } from './components/ViewSnippet.js';
import { NotFound } from './components/NotFound.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar.js'; 


function App() {
  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<GetSnippets />} />
          <Route path="/snippets" element={<GetSnippets />} />
          <Route path="/snippet" element={<CreateSnippet />} />
          <Route path="/snippet/:url_hash" element={<ViewSnippet />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )};

export default App;