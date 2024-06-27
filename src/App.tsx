import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Oscer from './components/Oscer';
import Button from './components/Button';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Box from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import UserContextProvider from './components/context/UserContext';
import User1 from './components/context/User1';
import Toast from './components/Toast';
import Test from './components/polymorphic/Test';
import Counter from './components/state/Counter';

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

      <Button handleClick={(event, id) => {
        console.log("hi", event, id);

      }}></Button>

      <Container style={{ border: "1px solid", padding: "5px" }}></Container>

      <LoggedIn></LoggedIn>
      <User></User>


      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>

      <UserContextProvider>
        <User1></User1>
      </UserContextProvider>

      <Toast position='center-bottom'></Toast>

      <Test as="h1" size='sm'>Heading</Test>
      <Test as="p" size='md'>Paragraph</Test>
      <Test as="label" size='md' color='promary'>Label</Test>


      <Counter></Counter>
    </div>
  );
}

export default App;
