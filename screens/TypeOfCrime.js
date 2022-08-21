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
  CheckBox,
} from "react-native";
// import { CheckBox } from "react-native-elements";

const TypeOfCrime = () => {
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

  return (
    <View style={styles.firstView}>
      <Text style={styles.TypeOfCrimeText}>What is the type of crime?</Text>
      <Text style={styles.allThatApllyText}>Please select all that apply</Text>
      <CheckBox
        value={drugRelated}
        onValueChange={setdrugRelated}
        checkedColor="green"
        checked={drugRelated}
        containerStyle={styles.drugRelatedContainer}
      />
      <CheckBox
        value={drugRelated1}
        onValueChange={setdrugRelated1}
        checkedColor="green"
        checked={drugRelated1}
        onPress={() => setdrugRelated1(!drugRelated1)}
        containerStyle={styles.drugRelated1Container}
      />
      <CheckBox
        value={drugRelated2}
        checkedColor="green"
        checked={drugRelated2}
        onPress={() => setdrugRelated2(!drugRelated2)}
        containerStyle={styles.drugRelated2Container}
      />
      <CheckBox
        value="Drug Related3"
        checkedColor="green"
        checked={drugRelated3}
        onPress={() => setdrugRelated3(!drugRelated3)}
        containerStyle={styles.drugRelated3Container}
      />
      <CheckBox
        value="Theft"
        checkedColor="green"
        checked={theft}
        onPress={() => setTheft(!theft)}
        containerStyle={styles.theftContainer}
      />
      <Text style={styles.takenText}>What was taken?</Text>
      <TextInput
        placeholder="Describe"
        onChangeText={(newText) => setwhatWasText(newText)}
        style={styles.takenTextInput}
      />
      <Text style={styles.takenText1}>How did Suspect take it?</Text>
      <TextInput
        placeholder="Describe"
        onChangeText={(newText) => setSuspectText(newText)}
        style={styles.takenTextInput}
      />
      <CheckBox
        value="Self Harm"
        checkedColor="green"
        checked={selfHarm}
        onPress={() => setSelfHarm(!selfHarm)}
        containerStyle={styles.selfHarmContainer}
      />
      <CheckBox
        value="Sex Crimes"
        checkedColor="green"
        checked={sexCrimes}
        onPress={() => setSexCrimes(!sexCrimes)}
        containerStyle={styles.sexCrimesContainer}
      />
      <CheckBox
        value="Molestation"
        checkedColor="green"
        checked={molestationCrimes}
        onPress={() => setMolestationCrimes(!molestationCrimes)}
        containerStyle={styles.molestationCrimesContainer}
      />
      <CheckBox
        value="Rape"
        checkedColor="green"
        checked={rapeCrimes}
        onPress={() => setRapeCrimes(!rapeCrimes)}
        containerStyle={styles.rapeCrimesContainer}
      />
      <CheckBox
        value="Prostitution"
        checkedColor="green"
        checked={prostitutionCrimes}
        onPress={() => setProstitutionCrimes(!prostitutionCrimes)}
        containerStyle={styles.prostitutionCrimesContainer}
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
