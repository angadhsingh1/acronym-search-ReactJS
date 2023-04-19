import './App.css';
import landingPage from './components/landingPage';
import Read from './components/read';
import UpdatePage from './components/update';
import createAcronym from './components/createAcron';
import Results from './components/results';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="main">
      <div class="header">BC Ministry of Social Development and Poverty Reduction</div>
        <Routes>
          <Route exact path="/" Component = {landingPage} />
          <Route path="/read" Component = {Read} />
          <Route path="/update" Component = {UpdatePage} />
          <Route path="/createAcronym" Component = {createAcronym} />
          <Route path="/results" Component = {Results} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;