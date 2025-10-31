import { BrowserRouter } from 'react-router-dom';
import './styles/variables.css';
import './styles/global.css';
import { ToastContainer } from 'react-toastify';
import { AppRoutes } from './AppRoutes';
import Cursor from './components/сursor/Cursor';

function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
