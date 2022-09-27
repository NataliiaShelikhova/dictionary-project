import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div classname="container">
        <header>
          <img src="https://png.pngtree.com/template/20191231/ourlarge/pngtree-green-orange-with-leaf-logo-design-image_343748.jpg" alt="orange"  width={90} />
          <span className='logo'>Your Dictionary</span>
          <Dictionary />
        </header>

      </div>
    
    </div>
  );
}

export default App;
