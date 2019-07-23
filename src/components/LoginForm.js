/*
  * Component Description
*/
import React from "react";
import { Text } from "react-native";
import firebase from "firebase";

import { Button, Card, CardSection, Input, Spinner } from "./common";
import { bindNodeCallback } from "rxjs";

export default class LoginForm extends React.Component {
displayName: "LoginForm"

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            error: "",
            loading: false,
            password: ""
        };

        this.onLoginFail = this.onLoginFail.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

render() {
    const { textInputStyle } = style;

  return (
    <Card>
        <CardSection>
            <Input
                label="Name"
                onChangeText={email => this.setState({ email })}
                placeholder="user@gmail.com"
                value={this.state.email}
                />
        </CardSection>

        <CardSection>
            <Input
                isPassword={true}
                label="Password"
                onChangeText={password => this.setState({ password })}
                placeholder="password"
                value={this.state.password}
            />
        </CardSection>

        <Text style={style.errorTextStyle}>
            {this.state.error}
        </Text>

        <CardSection>
            {this.state.loading ? (
                <Spinner size="small" />
            ) : <Button onPress={this.onButtonPress}>
                Log In
            </Button>}
        </CardSection>
    </Card>
  );
}

    onButtonPress() {
       const { email, password } = this.state;

       this.setState({ error: "", loading: true });

       firebase.auth().signInWithEmailAndPassword(email, password).then(this.onLoginSuccess).catch(err => {
           firebase.auth().createUserWithEmailAndPassword(email, password).then(this.onLoginSuccess).catch(this.onLoginFail);
       });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false })
    }
    
    onLoginSuccess() {
        this.setState({ email: "", password: "", loading: false, error: "" });
    }
}

const style = {
    errorTextStyle: {
        fontSize: 20,
        color: "red",
        fontSize: 20,
        alignItems: "center"
    }
}