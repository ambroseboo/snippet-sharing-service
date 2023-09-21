import './style.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { getSnippets } from './actions/actions.js';
import { CreateSnippet } from './components/CreateSnippet.js';
import { GetSnippets } from './components/GetSnippets';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getSnippets().then(data => setData(data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetSnippets />} />
        <Route path="/snippets" element={<GetSnippets />} />
        <Route path="/snippet" element={<CreateSnippet />} />
      </Routes>
    </Router>
  )};

export default App;