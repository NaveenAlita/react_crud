import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import UserListing from './pages/UserListing';
import EditForm from './pages/EditForm';
import NoMatch from './pages/NoMatch';
import NavBar from './pages/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <NavBar/>
           <Routes>
              <Route exact path='/' element={<UserListing />}></Route>
              <Route exact path='/add-user' element={<Form />}></Route>
              <Route exact path='/edit-user' element={<EditForm />}></Route>
              <Route path="*" element={<NoMatch/>} />
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
