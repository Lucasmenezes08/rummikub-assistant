import { BrowserRouter , Routes , Route} from 'react-router-dom'
import './style/styles.css'
import Homepage from './routers/homepage'


export default function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  )
}