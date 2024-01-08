import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateOutlet from './utils/PrivateOutlet';
import PublicOutlet from './utils/PublicOutlet';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicOutlet />}>
            <Route element={<>login</>} path='/' />
          </Route>
          <Route element={<PrivateOutlet />}>
            <Route element={<>home</>} path='/home' />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
