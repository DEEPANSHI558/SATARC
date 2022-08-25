import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Snackbar } from "react-native-paper";
import { Octicons } from "@expo/vector-icons";
import routes from "../apiRoutes";
import { Formik } from "formik";
const Otp = ({ route, navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [otpPop, setOtpPop] = useState(true);
  const submitData = async (values) => {
    try {
      const { data } = await axios.post(
        routes.login + "/" + route.params.userId,
        values
      );
      console.log(data);
      navigation.navigate("HomeScreen");
    } catch (e) {
      console.log("not ok");
      setIsVisible(true);
    }
  };
  return (
    <>
      <Snackbar
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        action={{
          label: "OK",
          onPress: () => {
            setIsVisible(false);
          },
        }}
      >
        Invalid OTP
      </Snackbar>
      <View>
        <View style={{ position: "relative", height: 300, width: "100%" }}>
          <Snackbar
            visible={otpPop}
            onDismiss={() => setOtpPop(false)}
            action={{
              label: "OK",
              onPress: () => {
                setOtpPop(false);
              },
            }}
          >
            Your OTP is {route.params.otp}
          </Snackbar>
        </View>
        <Formik initialValues={{ otp: "" }} onSubmit={submitData}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.styledformArea}>
              <MyInputText
                label="ENTER OTP"
                icon="device-mobile"
                placeholder="Enter OTP"
                onChangeText={handleChange("otp")}
                onBlur={handleBlur("otp")}
                value={values.otp}
              ></MyInputText>
              <Text style={styles.msgBox}></Text>
              <TouchableOpacity
                style={styles.styledButton}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <View style={styles.line}></View>
            </View>
          )}
        </Formik>
      </View>
    </>
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
    fontSize: 16,
    textAlign: "left",
  },
  //view
  leftIcon: {
    left: 15,
    top: 38,
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

export default Otp;
