import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  //const likes = 50; //here it is a number, but it doesnt matter because react is gonna convert whatever datatype we use to a string before it outputs it to the browser

  //react cannot output objects or booleans
//const person = {name: "yoshi", age: "30"}; if we try to out put this it will result in an error there numbers, strings and arrays are fine and objects and booleans are not

	return (
    	<Router> {/* we surround our entire application with the router component and what that means is we can use the router in the entire application, all components that are nested inside this app component have acces to the router */}
			<div className="App">
				<Navbar /> {/*we can also write it as <Navbar></Navbar>*/}
				<div className="content">
					<Switch> {/*switch component makes sure that only one route shows at any one time and all of our routes go inside the switch component */}
						<Route exact path="/"> {/* we create a route for each page that we have using this route component. The 'path' property is basically the route, so for home page it will be "/", if it were a contact page it could have been "/contact", basically this is the path after the root of our website */}
							<Home />
						</Route>
						<Route path="/create"> 
							<Create />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
