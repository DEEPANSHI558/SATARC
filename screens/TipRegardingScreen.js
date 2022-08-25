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

const TipRegardingScreen = ({ values }) => {
  const [checked, setChecked] = React.useState("individual");
  values.regarding = checked;
  console.log(values);
  return (
    <View style={styles.firstView}>
      <Text style={styles.tipReagardingText}>What is this tip regarding?</Text>
      <View>
        <View style={styles.firstRadioButtonView}>
          <RadioButton
            value="first"
            status={checked === "individual" ? "checked" : "unchecked"}
            onPress={() => setChecked("individual")}
          />
          <Text style={{ position: "relative", top: 8 }}>Individual</Text>
        </View>
        <View style={styles.firstRadioButtonView}>
          <RadioButton
            value="second"
            status={checked === "organization" ? "checked" : "unchecked"}
            onPress={() => setChecked("organization")}
          />
          <Text style={{ position: "relative", top: 8 }}>Organization</Text>
        </View>
        {/* <View style={styles.firstRadioButtonView}>
          <RadioButton
            value="third"
            status={checked === "fraud" ? "checked" : "unchecked"}
            onPress={() => setChecked("fraud")}
          />
          <Text style={{ position: "relative", top: 8 }}>Fraud</Text>
        </View> */}
        <View style={styles.firstRadioButtonView}>
          <RadioButton
            value="fourth"
            status={checked === "school" ? "checked" : "unchecked"}
            onPress={() => setChecked("school")}
          />
          <Text style={{ position: "relative", top: 8 }}>School</Text>
        </View>
        <View style={styles.firstRadioButtonView}>
          <RadioButton
            value="fourth"
            status={checked === "other" ? "checked" : "unchecked"}
            onPress={() => setChecked("other")}
          />
          <Text style={{ position: "relative", top: 8 }}>Other</Text>
        </View>
      </View>
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
