import React from "react";
import firebaseConfig from "./firebase/config.js";
import firebase from "firebase";
import data from "./data.json";
import Single from "./single";

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
                <h1>Hello World</h1>
                <Single />
            </div>
        );
    }
}

export default App;