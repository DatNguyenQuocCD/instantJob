import './App.css';
import './Asset/StyleForm.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Login/>}/>
          <Route path='/Register' element= {<Register />}/>
          <Route path='/Login' element= {<Login />}/>
          <Route path='/Home' element= {<HomePage />}/>
          <Route path='/About' element= {<AboutPage />}/>
          <Route path='/Contact' element= {<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Header></Header> */}
    </div>
  );
}

export default App;
