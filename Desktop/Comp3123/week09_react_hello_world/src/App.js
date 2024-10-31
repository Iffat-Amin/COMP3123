import logo from './logo.svg';
import './App.css';
import Welcome , {Greet} from './Hello';
import Greetings from './Greetings';
import SayHello from './SayHello';

function App() {
  return (
    <div className='App'>
      <img src={logo} alt='App logo'/>
    
      <h1>
            Hello from

          </h1>
          <p>
          Iffat 101429832
        </p>

        <Welcome/>
        <Greetings name="Iffat"/>
        <Greet/>
        <SayHello/>
        <SayHello fname="Qinxi" lname="liu"/>
        <SayHello fname="Camila" lname="Lee"/>
        <SayHello fname="Ammar" lname="Sultan"/>
    </div>
  );
}

export default App;
