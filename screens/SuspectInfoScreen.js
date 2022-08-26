import React, { useEffect, useState } from "react";
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

const TypeOfCrime = ({ formData, setFormData }) => {
  const [drugRelated, setdrugRelated] = React.useState(false);
  const [drugRealatedValue, setdrugRelatedValue] = React.useState("");

  const [drugRelated1, setdrugRelated1] = React.useState(false);

  const [drugRelated2, setdrugRelated2] = React.useState(false);
  const [drugRelated3, setdrugRelated3] = React.useState(false);
  const [theft, setTheft] = React.useState(false);
  const [selfHarm, setSelfHarm] = React.useState(false);
  const [sexCrimes, setSexCrimes] = React.useState(false);
  const [molestationCrimes, setMolestationCrimes] = React.useState(false);
  const [rapeCrimes, setRapeCrimes] = React.useState(false);
  const [prostitutionCrimes, setProstitutionCrimes] = React.useState(false);
  const [whatWasText, setwhatWasText] = React.useState("");
  const [suspectText, setSuspectText] = React.useState("");
  const [crime, setCrime] = useState("");
  const [suspect, setSuspect] = useState(null);
  const [vehicle, setVehicle] = useState("");

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <View style={styles.firstView}>
      <Text style={styles.TypeOfCrimeText}>Please select all that apply</Text>
      <Text style={styles.allThatApllyText}></Text>
      <View>
        <Text style={{ fontWeight: "bold" }}>
          Do you have info regarding the suspect?
        </Text>
      </View>
      <CheckBox
        title="Yes"
        checkedColor="green"
        checked={suspect === true}
        onPress={() => {
          setSuspect(true);
          setFormData({
            ...formData,
            suspect: true,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <CheckBox
        title="No"
        checkedColor="green"
        checked={suspect === false}
        onPress={() => {
          setSuspect(false);
          setFormData({
            ...formData,
            suspect: false,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>Is there a vehicle involved?</Text>
      </View>
      <CheckBox
        title="Yes"
        checkedColor="green"
        checked={vehicle === "true"}
        onPress={() => {
          setVehicle("true");
          setFormData({
            ...formData,
            vehicle: true,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <CheckBox
        title="No"
        checkedColor="green"
        checked={vehicle === "false"}
        onPress={() => {
          setVehicle("false");
          setFormData({
            ...formData,
            vehicle: false,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>Provide a description</Text>
      </View>
      <TextInput
        placeholder="Describe the suspect"
        onChangeText={(text) => {
          setFormData({
            ...formData,
            suspect_info: text,
          });
        }}
        style={styles.takenTextInput}
      />
    </View>
  );
};

export default TypeOfCrime;

const styles = StyleSheet.create({
  firstView: {
    margin: 20,
    flex: 1,
    flexDirection: "column",
    display: "flex",
  },

  TypeOfCrimeText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },

  allThatApllyText: {
    marginLeft: 0,
    margin: 12,
    fontWeight: "400",
  },

  drugRelatedContainer: {
    marginLeft: -10,
    margin: 5,
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  drugRelated1Container: {
    backgroundColor: "transparent",
    margin: -2,
    borderWidth: 0,
  },

  drugRelated2Container: {
    backgroundColor: "transparent",
    borderWidth: 0,
    margin: -2,
  },

  drugRelated3Container: {
    backgroundColor: "transparent",
    borderWidth: 0,
    margin: -2,
  },

  theftContainer: {
    marginLeft: -10,
    margin: 15,
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  takenText: {
    margin: -10,
    marginLeft: 25,
  },

  takenTextInput: {
    // margin:10,
    width: "auto",
    height: 172,
    backgroundColor: "#FCFAFA",
    borderWidth: 1,
    solid: "#919191",
    borderRadius: 5,
    margin: 25,
    textAlign: "center",
    backgroundColor: "transparent",
  },

  takenText1: {
    margin: -10,
    marginLeft: 25,
  },

  selfHarmContainer: {
    marginLeft: -10,
    margin: 5,
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  sexCrimesContainer: {
    marginLeft: -10,
    margin: 5,
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  molestationCrimesContainer: {
    backgroundColor: "transparent",
    margin: -2,
    borderWidth: 0,
  },

  rapeCrimesContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    margin: -2,
  },

  prostitutionCrimesContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    margin: -2,
  },
});
