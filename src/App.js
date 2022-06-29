// Import data
import Gallery from './Components/Gallery';
import Directory from './Components/Directory';
import Searchbar from './Components/Searchbar';
import Sidebar from './Components/Sidebar';
// Import components
import './App.css';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Gallery> </Gallery>
        <Directory></Directory>
        <Searchbar></Searchbar>
        <Sidebar></Sidebar>
        <Gallery> </Gallery>
      </div>
    </div>
  );
}

export default App;
