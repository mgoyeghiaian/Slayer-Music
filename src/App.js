import './App.css';
import './index.css'
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <body>
      <div className='main'>
        <section><Navbar /></section>
        <section ><Main /></section>
        <section><Footer /></section>
      </div>
    </body>
  );
}
export default App;
