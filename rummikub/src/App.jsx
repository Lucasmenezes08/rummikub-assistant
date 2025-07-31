import { BrowserRouter , Routes , Route} from 'react-router-dom'
import './style/styles.css'
import Homepage from './routers/homepage'
import ThemeProvider from './store/darkThemeContext'
import QuantidadePlayer from './store/playerQuantidadeContext'


export default function App (){
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/quantidade' element={<QuantidadePlayer/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}