import React from "react";
import firebaseConfig from "./firebase/config.js";
import firebase from "./firebase/firebase";
import Grid from "./components/Grid";
import Form from "./components/Form";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
		};
	}

	updateData = () => {
		firebase.db
			.collection("contacts")
			.get()
			.then((snapshot) => {
				let contacts = [];
				snapshot.forEach((doc) => {
					let contact = Object.assign({ id: doc.id }, doc.data());

					contacts.push(contact);
				});

				this.setState({
					contacts,
				});
			})
			.catch((err) => {
				console.error("Une erreur s'est produite: ", err);
			});
	};

	componentDidMount = () => {
		this.updateData();
	};

	render() {
		return (
			<div>
				<h1>Contacts</h1>
				<Form />
				<Grid items={this.state.contacts} />
			</div>
		);
	}
}

export default App;
