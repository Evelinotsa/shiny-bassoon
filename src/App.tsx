import './App.css';
import MyButton from "./components/MyButton";
import MyContainer from './layout/MyContainer';
import Login from './components/Login';
import { Outlet } from 'react-router-dom';

function App() {
  return (
  //<MyContainer>
   // <Login />
  //</MyContainer>
  <>
    <h1>Header</h1>
    <Outlet />
  </>
  )
}

export default App;
