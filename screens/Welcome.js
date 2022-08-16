import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";

export const Colours = {
  primary: "#ffffff",
  secondary: "#E5E7E8",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#108981",
  red: "#EF4444",
};
const { primary, secondary, tertiary, darkLight, brand, green, red } = Colours;

const Welcome = ({ navigation }) => {
  // when to hide the password or show the password
  const [hidepassword, setHidePassword] = useState(true);
  return (
    <View style={styles.innerContainer}>
      <View style={styles.welcomecontainer}>
        <Text style={styles.welcomeTitle}>Welcome </Text>
        <Text style={styles.welcomeSubTitle}>Deepanshi Singh</Text>
        <Text style={styles.welcomeSubTitle}>singhdeepanshi2403@gmail.com</Text>
        <View style={styles.styledformArea}>
          <Image
            style={styles.avatar}
            source={require("../assets/image.jpeg")}
          ></Image>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={styles.styledButton}
            onPress={() => {
              navigation.navigate("Form");
            }}
          >
            <Text style={styles.buttonText}>Submit Tip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.styledButton}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  innerContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  styledformArea: {
    width: "90%",
  },

  //touchableopacity
  styledButton: {
    padding: 15,
    backgroundColor: "#4285F4",
    justifyContent: "center",
    borderRadius: 5,
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
  //msg box text

  //View
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#9CA3AF",
    marginVertical: 10,
  },

  //   extra view

  //Welcome View
  welcomecontainer: {
    width: "100%",
    alignItems: "center",
    padding: 25,
    paddingTop: 10,
    justifyContent: "center",
  },
  // Avatar Iamge
  avatar: {
    width: 100,
    height: 100,
    marginLeft: "33%",

    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#E5E7E8", //secondary
    marginBottom: 10,
    marginTop: 10,
  },
  //iamge
  welcomeImage: {
    height: "50%",
    minWidth: "100%",
  },

  welcomeSubTitle: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 5,
    fontWeight: "normal",
  },
  welcomeTitle: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: "#4285F4",
    padding: 10,
  },
});
