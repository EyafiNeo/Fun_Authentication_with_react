import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Signin from './Component/SignIn/Signin';
import SignUp from './Component/SignUp/SignUp';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
          path: '/',
          element: <SignUp></SignUp>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/signin',
          element: <Signin></Signin>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
