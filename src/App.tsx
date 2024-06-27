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
import MutableRef from './components/ref/MutableRef';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import RandomNumber from './components/restriction/RandomNumber';
import CustomButton from './components/html/Button';

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

      <MutableRef></MutableRef>

      <Private isLoggedIn={true} Component={Profile}></Private>

      {/* <List items={["sakib", 'rakib', 'akib']} click={(item) => console.log(item)}></List> */}

      {/* <List items={[1, 2, 3, 4]} click={(item) => console.log(item)}></List> */}

      <List items={[{ id: 1, fname: 'mehedi', lnmae: 'hasan' }, { id: 2, fname: 'israt', lname: 'jahan' }]} click={(item) => console.log(item)}></List>
      <RandomNumber value={10} isPositive></RandomNumber>

      <CustomButton variant='primary'>
        hi
      </CustomButton>
    </div>
  );
}

export default App;
