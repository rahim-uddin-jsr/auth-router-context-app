import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/routes/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />,
      children: [
        {
          path: '/home', element: <Home />
        },
        {
          path: '/about', element: <PrivateRoute><About /></PrivateRoute>
        },
        {
          path: '/login', element: <Login />
        },
        {
          path: '/register', element: <Register />
        },
      ]
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
