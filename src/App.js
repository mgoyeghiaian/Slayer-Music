import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='main'>
      <section><Navbar /></section>
      <section ><Main /></section>
      <section><Footer /></section>
    </div>
  );
}
export default App;
