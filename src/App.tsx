import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Oscer from './components/Oscer';

function App() {
  const person = {
    first: "Jhon",
    last: "Doe"
  }

  const nameList = [
    {
      first: "Sakib",
      last: "Hasan"
    },
    {
      first: "Rakib",
      last: "Khan"
    },
    {
      first: "Akib",
      last: "Ali"
    }
  ]
  return (
    <div className="App">
      hello world
      <Greet name="Md. Mehedi Hasan" messageCount={10} isLogedIn={true}></Greet>
      <Person name={person}></Person>
      <PersonList names={nameList}></PersonList>
      <Status status='loading'></Status>
      <Oscer>
        <Heading>This is children props</Heading>
      </Oscer>
    </div>
  );
}

export default App;
