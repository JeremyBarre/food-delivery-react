import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import { CartProvider } from './contexts/CartContext'
import Navigator from './navigation/Navigator'

function App () {
  return (
    <div className='App'>
      <CartProvider>
        <Header />
        <Navigator />
        <Cart />
      </CartProvider>
    </div>
  )
}

export default App
