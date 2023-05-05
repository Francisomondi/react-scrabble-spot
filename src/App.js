
import Account from './Account';
import './App.css';
import Hello from './components/Hello';
import Product from './components/Product';



function App() {
  return (
    <div className="App">
      <Hello/>
      <Account name= 'Francis ' lastname="Okello"/>
      <Product/>
   

    </div>
  );
}

export default App;
