import './assets/css/style.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom"
import Home from './pages/Home';
import Games from './pages/Games';
import About from './pages/About';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NotFound from './pages/NotFound';
import { GamesProvider } from './context/games/GamesContext';
import { CartProvider } from './context/cart/CartContext';
import FetchGames from './utilities/FetchGames';
import GameDetails from './pages/GameDetails';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
function App() {

  


  return (
    <GamesProvider>
      <ToastContainer />
      <CartProvider>
      <FetchGames/>
      <Router>
      <Header/>
      <Routes>
        <Route path='/'  exact={true}  element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/games'   element={<Games/>}></Route>
        <Route path='/favorites'   element={<Favorites/>}></Route>
        <Route path='/cart'   element={<Cart/>}></Route>
        <Route path='/games/:id'  element={<GameDetails/>}></Route>
        <Route path='/notFound' element={<NotFound/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
      </Router>
      </CartProvider>
    </GamesProvider>
  );
}

export default App;
