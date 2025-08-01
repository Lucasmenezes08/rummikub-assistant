import { BrowserRouter , Routes , Route} from 'react-router-dom'
import './style/styles.css'
import Homepage from './routers/homepage'
import ThemeProvider from './store/darkThemeContext'
import QuantidadePlayer from './routers/quantidade-players'
import PlayerQuantidadeProvider from './store/playerQuantidadeContext'
import PlayerName from './routers/playerName'
import PlayerProvider from './store/playerInfo'
import Game from './routers/game'
import Resultado from './routers/resultado'



export default function App (){
  return (
    <PlayerProvider>
    <ThemeProvider>
    <PlayerQuantidadeProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/quantidade' element={<QuantidadePlayer/>}/>
        <Route path='/playername' element={<PlayerName/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/resultado' element={<Resultado/>}/>
      </Routes>
    </BrowserRouter>
    </PlayerQuantidadeProvider>
    </ThemeProvider>
    </PlayerProvider>
  )
}