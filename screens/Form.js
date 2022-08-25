import React, { useState } from "react";
import axios from "axios";
import InvestigationVerfication from "./IdentityVerification";
import CrimeDetailScreenOne from "./CrimeDetailScreenOne";
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

const ProgressStepsProps = {
  borderWidth: 3,
  completedLabelColor: "#4285F4",
  activeLabelColor: "#4285F4",
  activeStepIconBorderColor: "#4285F4",
  completedProgressBarColor: "#4285F4",
  completedStepIconColor: "#4285F4",
};

const Form = ({ navigation }) => {
  const submitTip = async (formData, user_id) => {
    try {
      const d = (
        await axios.post(tip_api, { formData: formData, user_id: user_id })
      ).data;
      console.log(d);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "singh",
        password: "",
        crimeTime: "",
        dateTime: "",

        address: "",
        regarding: "",
        regardingTip: "",
      }}
      onSubmit={(values) => {
        navigation.navigate("Login");
        console.log(values);
        submitTip(values);
        console.log("submitted");
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.firstView}>
          <View style={{ height: 30 }} />
          <ProgressSteps {...ProgressStepsProps}>
            <ProgressStep label="New Tip">
              <CrimeDetailScreenOne
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
              ></CrimeDetailScreenOne>
            </ProgressStep>
            <ProgressStep label="Regarding">
              <TipRegardingScreen values={values}></TipRegardingScreen>
            </ProgressStep>
            <ProgressStep label="Crime Info">
              <TypeOfCrime></TypeOfCrime>
            </ProgressStep>
            <ProgressStep label="Suspect Info" onSubmit={handleSubmit}>
              <SuspectInfoScreen></SuspectInfoScreen>
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

  firstView: {
    display: "flex",
    flex: 1,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
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
