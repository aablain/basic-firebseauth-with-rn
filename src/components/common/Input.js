/*
  * Component Description
*/
import React from "react";
import { TextInput, Text, View } from "react-native";

export default ({ isPassword = false, label, onChangeText, placeholder = "", textInputStyle = {}, value }) => {
  return (
      <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>{label}</Text>

          <TextInput
              autoCorrect={false}
              onChangeText={onChangeText}
              placeholder={placeholder}
              secureTextEntry={isPassword}
              style={{ ...styles.inputStyle, ...textInputStyle }}
              value={value}
          />
      </View>
  );
}

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    labelStyle: {
        paddingLeft: 20,
        fontSize: 18,
        flex: 1,
    },
    inputStyle: {
        color: "#000",
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
}