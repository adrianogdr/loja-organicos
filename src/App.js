import { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './components/appBar.jsx';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('produtos');

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <div className="App">
      <ResponsiveAppBar
        cartCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
      />
      {currentPage === 'produtos' && <ProductList onAddToCart={handleAddToCart} />}
      {currentPage === 'sobre' && <About />}
      {currentPage === 'contato' && <Contact />}
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}

export default App;
