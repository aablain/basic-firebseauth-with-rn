import React from "react";
import { Text, View } from "react-native";

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#ececec',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 35
  }
};

export { Header };
