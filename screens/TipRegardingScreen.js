import React from "react";
import { render } from "react-dom";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  ToastAndroid,
  Alert,
  Image,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { RadioButton } from "react-native-paper";

const TipRegardingScreen = ({ formData, setFormData }) => {
  const [regarding, setRegarding] = React.useState("");

  return (
    <View style={styles.firstView}>
      <Text style={styles.tipReagardingText}>What is this tip regarding?</Text>
      <CheckBox
        title="Individual"
        checkedColor="green"
        checked={regarding === "Individual"}
        onPress={() => {
          setRegarding("Individual");
          setFormData({ ...formData, regarding: "Individual" });
        }}
        containerStyle={styles.individualContainer}
      />
      <CheckBox
        title="Organisation"
        checkedColor="green"
        checked={regarding === "Organisation"}
        onPress={() => {
          setRegarding("Organisation");
          setFormData({ ...formData, regarding: "Organisation" });
        }}
        containerStyle={styles.organisationContainer}
      />
      <CheckBox
        title="Fraud"
        checkedColor="green"
        checked={regarding === "Fraud"}
        onPress={() => {
          setRegarding("Fraud");
          setFormData({ ...formData, regarding: "Fraud" });
        }}
        containerStyle={styles.fraudContainer}
      />
      <CheckBox
        title="School"
        checkedColor="green"
        checked={regarding === "School"}
        onPress={() => {
          setRegarding("School");
          setFormData({ ...formData, regarding: "School" });
        }}
        containerStyle={styles.schoolContainer}
      />
      <CheckBox
        title="Other"
        checkedColor="green"
        checked={regarding === "Other"}
        onPress={() => {
          setRegarding("Other");
          setFormData({ ...formData, regarding: "Other" });
        }}
        containerStyle={styles.otherContainer}
      />
      {console.log(formData)}
    </View>
  );
};

export default TipRegardingScreen;

const styles = StyleSheet.create({
  firstView: {
    margin: 20,
    flex: 1,
    flexDirection: "column",
    display: "flex",
  },

  tipReagardingText: {
    margin: 7,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },

  individualContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  organisationContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  fraudContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  schoolContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  otherContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  firstRadioButtonView: {
    margin: 7,
    display: "flex",
    flexDirection: "row",
  },
});
