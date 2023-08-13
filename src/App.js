import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import AddUser from './Composants/AddUser';
import UpdateUser from './Composants/UpdateUser';
import UserList from './Composants/UserList';

function App() {
  return (
    <div className="App">
      <h1>CRUD react-redux-tp</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserList/>}/>
      <Route path='/add-user' element={<AddUser/>}/>
      <Route path='/update-user/:id' element={<UpdateUser/>}/>
    </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
