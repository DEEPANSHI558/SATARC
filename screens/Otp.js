import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Snackbar } from "react-native-paper";
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
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.otpReceiveContainer}>
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
            Your OTP is{" "}
            <Text
              style={{
                color: "yellow",
                fontWeight: "bold",
              }}
            >
              {route.params.otp}
            </Text>
          </Snackbar>
        </View>
        <View style={styles.otp}>
          <Text style={styles.textBold}>Enter OTP Received</Text>
          {/* <Text>User Id {route.params.userId}</Text> */}
          <Formik
            initialValues={{ otp: "" }}
            onSubmit={(values) => {
              submitData(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  // placeholder="Enter Valid OTP"
                  onChangeText={handleChange("otp")}
                  onBlur={handleBlur("otp")}
                  value={values.otp}
                  style={styles.textInput}
                ></TextInput>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.styledButton}
                >
                  <Text style={styles.buttonText}>Submit OTP</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                  style={styles.textLink}
                  onPress={() => resendOtp()}
                >
                  <Text style={styles.textLinkContent}>Resend OTP</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.otpinvalidContainer}>
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
        </View>
      </View>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffff",
  },
  innerContainer: {
    margin: 10,
    marginTop: 40,
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
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#1F2937",
  },
  styledformArea: {
    width: 270,
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
  number: {
    color: "red",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  otpReceiveContainer: {
    // paddingBottom: 300,
    height: "80px",
    width: "100%",
    // backgroundColor: "black",
  },
  otpinvalidContainer: {
    height: "500px",
    width: "100%",
    // backgroundColor: "black",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#9CA3AF",
    marginVertical: 10,
  },
  textLink: {
    justifyContent: "center",
    alignItems: "center",
  },
  textLinkContent: {
    color: "#4285F4",
    fontSize: 15,
  },
});
