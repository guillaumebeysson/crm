import React from "react";
import firebaseConfig from "./firebase/config.js";
import firebase from "firebase";
import data from "./data.json";
import Grid from "./components/Grid";
import Form from "./components/Form";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data };
	}
	componentDidMount = () => {
		firebase.initializeApp(firebaseConfig);
	};

	render() {
		return (
			<div>
				<h1>Contacts</h1>
				<Form />
				<Grid items={this.state.data} />
			</div>
		);
	}
}

export default App;
