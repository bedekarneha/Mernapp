import './App.css';
import Header from './components/parts/header';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/parts/Home';
import Register from './components/parts/Register';
import Login from './components/parts/Login';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Login/>
      <Register/>
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App;
