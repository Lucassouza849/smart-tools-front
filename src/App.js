
import './globals.css';
import { Toaster } from 'react-hot-toast';


import Routes from './routes';

function App() {

  return (
   <>
   <Toaster 
   toastOptions={{
    duration: 5000,
    }} />
   <Routes />  
   </>
  );
}

export default App;
