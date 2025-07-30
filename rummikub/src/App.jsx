import { BrowserRouter , Routes , Route} from 'react-router-dom'
import './style/styles.css'


export default function App (){
  return (
    <BrowserRouter>
      <Route path='/' element={<Homepage/>}
    </BrowserRouter>
  )
}