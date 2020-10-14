import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Customer from "./components/Customer/Customer";
import Order from "./components/Customer/Order/Order";
import Services from "./components/Customer/Service List/ServiceList";
import ServiceList from "./components/Customer/Service List/ServiceList";
import Review from "./components/Customer/Review/Review";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />	
					<Route exact path="/customer/order" component={Customer} />
					<Route exact path="/customer/review" component={Customer} />
					<Route exact path="/customer/service" component={Customer} />
						
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
