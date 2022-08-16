import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
const Task = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.confirmText}>Confirmation</Text>
      <Octicons name="check" color="#4bb543" size={50}></Octicons>
      <Text style={styles.confirmText}>Tip Submitted for Review !</Text>
      <Text style={styles.confirmText}>Thanks For your Effort!</Text>
      <TouchableOpacity
        style={styles.styledButton}
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  confirmText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  styledButton: {
    padding: 15,
    width: 150,
    backgroundColor: "#4285F4",
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 5,
    height: 60,
  },
  //text
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
// import React, { useState } from "react";
// import Stepper from "react-native-stepper-ui";
// import { View, Alert, Text } from "react-native";
// import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
// import Login from "./Login";
// import Signup from "./Signup";
// import Welcome from "./Welcome";

// import { NavigationContainer } from "@react-navigation/native";
// const buttonTextStyle = {
//   color: "#fff",
//   backgroundColor: "#393939",
//   padding: 20,
//   borderRadius: 20,
// };
// const confirm = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1 }}>

//     </View>
//   );
// };

// export default confirm;
