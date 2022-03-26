import Navbar from './Navbar';
import Home from './Home';

function App() {
  //const likes = 50; //here it is a number, but it doesnt matter because react is gonna convert whatever datatype we use to a string before it outputs it to the browser

  //react cannot output objects or booleans
//const person = {name: "yoshi", age: "30"}; if we try to out put this it will result in an error there numbers, strings and arrays are fine and objects and booleans are not

  return (
    <div className="App">
      <Navbar /> {/*we can also write it as <Navbar></Navbar>*/}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
