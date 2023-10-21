import Aboutblog from './Aboutblog';
import './App.css';
import Footer from './Footer';
import Maincontent from './Maincontent';
import Middle from './Middle';
import Navigation from './Navigation';
import Section from './Section';
import Side from './Side';

function App() {
  return (
<>

<Navigation/>
<Section/>
<Aboutblog/>
<Maincontent/>
<div className="container-fluid d-flex sm-adjust">
<Side/>
<Middle/>
</div>
<Footer/>
</>
);






}
 


export default App;
