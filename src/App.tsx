import { router } from './Routes/Routes'
import {Router, RouterProvider} from 'react-router-dom'

function App() {

  return (
    <div>
        <RouterProvider router={router}>
        
        </RouterProvider>
    </div>
  )
}

export default App
