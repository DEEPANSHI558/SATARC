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

const SignUp = ({ navigation }) => {
  // when to hide the password or show the password
  const [hidepassword, setHidePassword] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.pageTitle}>Register/UserDetails</Text>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("Welcome");
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.styledformArea}>
              <MyInputText
                label=" Full Name"
                icon="person"
                placeholder="Deepanshi Singh"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("email")}
                value={values.fullName}
              ></MyInputText>

              <MyInputText
                label="Email Address"
                icon="mail"
                placeholder="email@gmail.com"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              ></MyInputText>

              <MyInputText
                label="Govt ID Aadhar/PAN/Driving Licence Upload"
                icon="mail"
                placeholder="email@gmail.com"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              ></MyInputText>

              <MyInputText
                label="Enter Password"
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor=""
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidepassword}
                isPassword={true}
                hidepassword={hidepassword}
                setHidePassword={setHidePassword}
              ></MyInputText>

              <MyInputText
                label="Confirm Password"
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor=""
                onChangeText={handleChange("confirmpassword")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidepassword}
                isPassword={true}
                hidepassword={hidepassword}
                setHidePassword={setHidePassword}
              ></MyInputText>

              <Text style={styles.msgBox}></Text>

              <TouchableOpacity
                style={styles.styledButton}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>

              <View style={styles.line}></View>

              <View style={styles.extraView}>
                <Text style={styles.extraText}>Already have an account?</Text>
                <TouchableOpacity
                  style={styles.textLink}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.textLinkContent}>SignIn</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const MyInputText = ({
  label,
  icon,
  isPassword,
  hidepassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <View style={styles.leftIcon}>
        <Octicons name={icon} size={30} color="#4285F4"></Octicons>
      </View>
      <Text style={styles.styledInputLabel}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="darkgray"
        {...props}
      ></TextInput>
      {isPassword && (
        <TouchableOpacity style={styles.rightIcon}>
          <Ionicons
            size={30}
            name={hidepassword ? "md-eye-off" : "md-eye"}
            onPress={() => {
              setHidePassword(!hidepassword);
            }}
          ></Ionicons>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
  },
  pageLogo: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },
  pageTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "#4285F4",
    padding: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#1F2937",
  },
  styledformArea: {
    width: "90%",
  },
  //this is for myInputText
  //   textinput
  textInput: {
    backgroundColor: "#E5E7E8",
    padding: 15,
    paddingLeft: 55,
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    color: "#1F2937",
  },
  //   text
  styledInputLabel: {
    color: "#1F2937",
    fontSize: 13,
    textAlign: "left",
  },
  //view
  leftIcon: {
    left: 15,
    top: 36,
    position: "absolute",
    zIndex: 1,
  },
  //touchable opacity
  rightIcon: {
    right: 15,
    top: 38,
    position: "absolute",
    zIndex: 1,
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
  msgBox: {
    textAlign: "center",
    fontSize: 13,
  },
  //View
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#9CA3AF",
    marginVertical: 10,
  },

  //   extra view
  extraView: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  //text
  extraText: {
    justifyContent: "center",
    alignContent: "center",
    color: "#1F2937", //tertiary
    fontSize: 15,
    marginRight: 10,
  },
  //touchable opacity
  textLink: {
    justifyContent: "center",
    alignItems: "center",
  },
  textLinkContent: {
    color: "#4285F4",
    fontSize: 15,
  },
});
