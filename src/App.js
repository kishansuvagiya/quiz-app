import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Category from './pages/Category';
import Quiz from './pages/Quiz';
import Protect from './Protect';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/quiz-app' element={<Login />} />
          <Route path='/quiz-app/category' element={<Protect><Category /></Protect>} />
          <Route path='/quiz-app/quiz/:name' element={<Protect><Quiz /></Protect>} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>

    </div>
  );
}

export default App;
