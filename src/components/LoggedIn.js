/*
  * Component Description
*/
import React from "react";
import { Text, View } from "react-native";

import { Button, Card, CardSection } from "./common/";

export default (props) => {
  return (
      <Card>
          <CardSection>
            <View style={{ flexGrow: 1 }}>
                <Text>Hello {props.user.email || "info not found"}</Text>
                <Button onPress={props.onButtonPress}>Log Out</Button>
            </View>
          </CardSection>
      </Card>
  );
}