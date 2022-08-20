import React, { useState } from "react";
import axios from "axios";
import InvestigationVerfication from "./InvestigationVerification";
import CrimeDeatilsScreenOne from "./CrimeDetailScreenOne";
import TipRegardingScreen from "./TipRegardingScreen";
import TypeOfCrime from "./TypeOfCrime";
import SuspectInfoScreen from "./SuspectInfoScreen";
const tip_api =
  "https://bpp8n7mg56.execute-api.us-east-1.amazonaws.com/dev/tips";
import {
  View,
  Alert,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

import { Formik } from "formik";
import { Octicons, Ionicons } from "@expo/vector-icons";

const Form = ({ navigation }) => {
  const [hidepassword, setHidePassword] = useState(true);
  const submitTip = async (values) => {
    try {
      const d = (await axios.post(tip_api, values)).data;
      console.log(d);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        submitTip(values);
        navigation.navigate("Task");
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ flex: 1, paddingTop: 30 }}>
          <ProgressSteps>
            <ProgressStep
              label="New Tip"
              activeStepIconBorderColor="#ffff"
              completedProgressBarColor=""
            >
              <MyInputText
                label="Govt ID Aadhar/PAN/Driving Licence Upload"
                icon="mail"
                placeholder="email@gmail.com"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              ></MyInputText>
            </ProgressStep>
            <ProgressStep label="Regarding">
              <MyInputText
                label="Email Address"
                icon="mail"
                placeholder="email@gmail.com"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              ></MyInputText>
            </ProgressStep>
            <ProgressStep >
              <InvestigationVerfication></InvestigationVerfication>
            </ProgressStep>
            <ProgressStep >
              <CrimeDeatilsScreenOne></CrimeDeatilsScreenOne>
            </ProgressStep>
            <ProgressStep >
              <TipRegardingScreen></TipRegardingScreen>
            </ProgressStep>
            <ProgressStep >
              <TypeOfCrime></TypeOfCrime>
            </ProgressStep>
            <ProgressStep >
              <SuspectInfoScreen></SuspectInfoScreen>
            </ProgressStep>
            <ProgressStep label="Crime Info" onSubmit={handleSubmit}>
              <MyInputText
                label="Email Address"
                icon="mail"
                placeholder="email@gmail.com"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              ></MyInputText>
            </ProgressStep>
          </ProgressSteps>
        </View>
      )}
    </Formik>
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
    <View style={{ margin: 20 }}>
      <View style={styles.leftIcon}>
        <Octicons name={icon} size={30} color="#4285F4"></Octicons>
      </View>
      <Text style={styles.styledInputLabel}>{label}</Text>
      <TextInput style={styles.textInput} {...props}></TextInput>
      {isPassword && (
        <TouchableOpacity>
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

export default Form;

const styles = StyleSheet.create({
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
    top: 30,
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
  buttonTextStyle: {
    color: "#fff",
    backgroundColor: "#393939",
    padding: 20,
    borderRadius: 20,
  },
});
