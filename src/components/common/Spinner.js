/*
  * Component Description
*/
import React from "react";
import { ActivityIndicator, View } from "react-native";

export default ({ size = "large" }) => {
  return (
    <View style={styles.viewStyle}>
        <ActivityIndicator size={size} />
    </View>
  );
};

const styles = {
    viewStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    // spinnerStyle: {

    // }
};