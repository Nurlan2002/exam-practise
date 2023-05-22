import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import './App.css';
import { ArtistContextProvider } from './contex/ArtistContext';
const routes =createBrowserRouter(ROUTES)

function App() {
  return (
    <ArtistContextProvider>
      <RouterProvider router={routes}/>
    </ArtistContextProvider>

  );
}

export default App;
