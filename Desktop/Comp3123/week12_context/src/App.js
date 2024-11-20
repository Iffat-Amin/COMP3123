import './App.css';
import { UserProvider } from './UserContext'; 
import UserChild1 from './UserChild1';
import UserChild2 from './UserChild2';
import UseEffectExample from './UseEffectExample';

var user = {
  fnm: 'Iffat',
  lnm: 'Nabila',
  count: 0,
  sayHello: () => {
    console.log('say Hello!');
  },
};

function App() {
  return (
    <div>
      <h1>React Context Examples</h1>
      <UserProvider value={user}>
        <UserChild1 />
        <UserChild2></UserChild2>
      </UserProvider>
      <UseEffectExample/>
    </div>
  );
}

export default App;
