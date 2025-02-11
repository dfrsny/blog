import './App.css'
import HomePage from './pages'
import { GlobalContext } from './context';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
  const user = {
    username : 'dian'
  }

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router}/>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
