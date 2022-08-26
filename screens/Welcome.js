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
import Popup from "./Popup";

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
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.innerContainer}>
      <View style={styles.welcomecontainer}>
        <Text style={styles.welcomeTitle}>SATARC</Text>
        <Text style={styles.welcomeSubTitle}>Welcome to Satarc</Text>
        <Text style={styles.welcomeSubTitle}>
          The most effective, anonymous reporting system for crime in the
          nation.
        </Text>
        <Popup modalVisible={showModal} setModalVisible={setShowModal} navigation={navigation}></Popup>
        <View style={styles.styledformArea}>
          <View style={styles.avatarView}>
            <Image
              style={styles.avatar}
              resizeMode="contain"
              source={require("../assets/welcome_icon.png")}
            ></Image>
          </View>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={styles.styledButton}
            onPress={() => {
              setShowModal(true);
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
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  innerContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
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

  //Welcome View
  welcomecontainer: {
    width: "100%",
    alignItems: "center",
    padding: 25,
    paddingTop: 10,
    justifyContent: "center",
  },
  avatarView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    borderWidth: 1,
    height: 160,
    width: 160,
    alignSelf: "center",
    borderColor: "#E5E7E8", //secondary
    marginBottom: 10,
    marginTop: 10,
  },
  // Avatar Iamge
  avatar: {
    width: "100%",
    height: "85%",
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
    textAlign: "center",
  },
  welcomeTitle: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: "#4285F4",
    padding: 10,
  },
});
