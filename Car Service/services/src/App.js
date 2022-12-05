import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import UserAction from "./Auth/UserAction";
import { Routes,Route } from 'react-router-dom';
import Login from './Auth/Login';

function App() {
  return (
<>
<Routes>
       
       <Route path='/Login' element={<UserAction className='App-header'/>} />
      <Route path='/' element={<Login/>} />
      </Routes>
</>
  )
}

export default App