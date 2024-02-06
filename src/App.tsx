import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { OrderProvider } from './context/CommerceContext';


function App() {
  return (
    <>
      <OrderProvider>
        <Header />
        <div>
          <ProductList />
        </div>
      </OrderProvider>
    </>
  );
}

export default App;
