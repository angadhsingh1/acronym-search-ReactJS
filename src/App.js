import './App.css';
import Create from './components/create';
import Read from './components/read';
import UpdatePage from './components/update';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">Welcome!</h2>
        <Routes>
          <Route exact path="/" Component = {Create} />
          <Route path="/read" Component = {Read} />
          <Route path="/update" Component = {UpdatePage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;