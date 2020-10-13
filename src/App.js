import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />	
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
