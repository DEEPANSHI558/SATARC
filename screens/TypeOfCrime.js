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
  useEffect(() => {
    console.log(formData);
  }, [crime]);

  return (
    <View style={styles.firstView}>
      <Text style={styles.TypeOfCrimeText}>What is the type of crime?</Text>
      <Text style={styles.allThatApllyText}>Please select all that apply</Text>
      <View>
        <Text style={{ fontWeight: "bold" }}>Drug Related</Text>
      </View>
      <CheckBox
        title="Drug Trafficking"
        checkedColor="green"
        checked={crime === "drug_trafficking"}
        onPress={() => {
          setCrime("drug_trafficking");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <CheckBox
        title="Drug Abuse"
        checkedColor="green"
        checked={crime === "drug_abuse"}
        onPress={() => {
          setCrime("drug_abuse");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <CheckBox
        title="Drug Production"
        checkedColor="green"
        checked={crime === "drug_production"}
        onPress={() => {
          setCrime("drug_production");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <CheckBox
        title="Theft"
        checkedColor="green"
        checked={crime === "theft"}
        onPress={() => {
          setCrime("theft");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelatedContainer}
      />
      <CheckBox
        title="Self harm"
        checkedColor="green"
        checked={crime === "self_harm"}
        onPress={() => {
          setCrime("theft");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelatedContainer}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>Sex Crimes</Text>
      </View>
      <CheckBox
        title="Molestation"
        checkedColor="green"
        checked={crime === "molestation"}
        onPress={() => {
          setCrime("molestation");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <CheckBox
        title="Rape"
        checkedColor="green"
        checked={crime === "rape"}
        onPress={() => {
          setCrime("rape");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <CheckBox
        title="Prostitution"
        checkedColor="green"
        checked={crime === "prostitution"}
        onPress={() => {
          setCrime("prostitution");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />

      <CheckBox
        title="Vandalism"
        checkedColor="green"
        checked={crime === "vandalism"}
        onPress={() => {
          setCrime("vandalism");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelatedContainer}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>Threat to National Security</Text>
      </View>
      <CheckBox
        title="Terrorism"
        checkedColor="green"
        checked={crime === "terrorism"}
        onPress={() => {
          setCrime("terrorism");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <CheckBox
        title="Bomb Threat"
        checkedColor="green"
        checked={crime === "bomb_threat"}
        onPress={() => {
          setCrime("bomb_threat");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelated1Container}
      />
      <CheckBox
        title="Report Wanted, Missing Person/Item"
        checkedColor="green"
        checked={crime === "missing"}
        onPress={() => {
          setCrime("missing");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelatedContainer}
      />
      <CheckBox
        title="Report Road Rage"
        checkedColor="green"
        checked={crime === "road_rage"}
        onPress={() => {
          setCrime("road_rage");
          setFormData({
            ...formData,
            crime_type: crime,
          });
        }}
        containerStyle={styles.drugRelatedContainer}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>Provide a description</Text>
      </View>
      <TextInput
        placeholder="Describe"
        onChangeText={(newText) => {
          setwhatWasText(newText);
          setFormData({
            ...formData,
            description: newText,
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
