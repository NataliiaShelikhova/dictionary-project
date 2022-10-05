import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src="https://png.pngtree.com/template/20191231/ourlarge/pngtree-green-orange-with-leaf-logo-design-image_343748.jpg" alt="orange"  width={90} />
          <span className='logo'>Your Dictionary</span>
          <Dictionary defaultKeyWord="dog" />
        </header>
        <footer>
          <p>Coded by <a href="https://astounding-chaja-60425e.netlify.app" target="_blank" rel="noreferrer"
          >Nata Shelikhova</a>  and is <a href='https://github.com/NataliiaShelikhova/dictionary-project' target="_blanck" rel="noopener, noreferrer">opensorced</a></p>
        </footer>

      </div>
    
    </div>
  );
}

export default App;
