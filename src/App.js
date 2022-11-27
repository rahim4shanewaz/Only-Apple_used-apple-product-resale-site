import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Router';
import 'react-day-picker/dist/style.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='w-full'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
