/*
  * Component Description
*/
import React from "react";
import firebase from "firebase";

import { View } from "react-native";
import { Button, Header, Spinner } from "./components/common/";
import LoggedIn from "./components/LoggedIn";
import LoginForm from "./components/LoginForm";

export default class App extends React.Component {
displayName: "App"

constructor(props) {
super(props);

this.state = {
    loggedIn: null,
    user: null
};

this.logOut = this.logOut.bind(this);
this.renderContent = this.renderContent.bind(this);
}

componentDidMount() {
    firebase.initializeApp({
        // * Must be supplied
    });

    firebase.auth().onAuthStateChanged(user => {
        this.setState({ user, loggedIn: !!user })
    });
}

render() {
  return (
    <View>
        <Header headerText="Authentication" />
        
        {this.renderContent()}
    </View>
  );
}

logOut() {
    firebase.auth().signOut();
}

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    // <Button onPress={this.logOut}>Log Out</Button>
                    <LoggedIn user={this.state.user} onButtonPress={this.logOut} />
                );
            case false:
                return (
                    <LoginForm />
                );
            default:
                <Spinner size="large" />
        }
    }
}