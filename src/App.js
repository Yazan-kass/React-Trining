import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import Button from './Components/Button';
import SearchBox from './Components/SearchBox';
import Link from './Components/Link/insex';
import Icon from './Components/Icon';
import InerHead from './Components/InerHead';
import Pragraph from './Components/Pragraph';
import Input from './Components/Input';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero text={"Component Trining"}/>
        <Input text={"Enter your name:"} id={"1"} placeholder={"yazan"} ></Input>
        <Icon icon={"./logo192.png"} alt={"logo"}/>
        <SearchBox/>
        <Button text={"search"}/>
        <Link href={"https://www.google.com"} text={"Google"}/>
        <InerHead text={"About"}/>
        <Pragraph text={"This training is to learn to create content and deal with props."}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  
        <Card/>
      </header>
    </div>
  );
}

export default App;
