import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';
import Login from './pages/login';
import Signup from './pages/signup';
import PrivateOutlet from './utils/PrivateOutlet';
import PublicOutlet from './utils/PublicOutlet';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicOutlet />}>
            <Route element={<Login />} path='/' />
            <Route element={<Signup />} path='/signup' />
          </Route>
          <Route element={<PrivateOutlet />}>
            <Route element={<Home />} path='/home' />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
