import { RouterProvider} from 'react-router-dom'
import { createHashRouter } from 'react-router-dom'
import Userpage from './pages/Userpage'
import Profilepage from './pages/Profilepage';

const router = createHashRouter([
  {
    path: '/',
    element: <Profilepage />,
  },
  {
    path: '/detail/:usersId',
    element: <Userpage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
