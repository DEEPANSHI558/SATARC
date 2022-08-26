import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RadioButton } from "react-native-paper";
import SelectList from "react-native-dropdown-select-list";
import { CheckBox } from "react-native-elements";

const CrimeDetailsScreenOne = ({ formData, setFormData }) => {
  const [askTime, setAskTime] = useState(false);
  const [askAddress, setAskAddress] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  // console.log(checked)

  const data = [
    { Key: "AN", value: "Andaman and Nicobar Islands" },
    { Key: "AP", value: "Andhra Pradesh" },
    { Key: "AR", value: "Arunachal Pradesh" },
    { Key: "AS", value: "Assam" },
    { Key: "BR", value: "Bihar" },
    { Key: "CG", value: "Chandigarh" },
    { Key: "CH", value: "Chhattisgarh" },
    { Key: "DH", value: "Dadra and Nagar Haveli" },
    { Key: "DD", value: "Daman and Diu" },
    { Key: "DL", value: "Delhi" },
    { Key: "GA", value: "Goa" },
    { Key: "GJ", value: "Gujarat" },
    { Key: "HR", value: "Haryana" },
    { Key: "HP", value: "Himachal Pradesh" },
    { Key: "JK", value: "Jammu and Kashmir" },
    { Key: "JH", value: "Jharkhand" },
    { Key: "KA", value: "Karnataka" },
    { Key: "KL", value: "Kerala" },
    { Key: "LD", value: "Lakshadweep" },
    { Key: "MP", value: "Madhya Pradesh" },
    { Key: "MH", value: "Maharashtra" },
    { Key: "MN", value: "Manipur" },
    { Key: "ML", value: "Meghalaya" },
    { Key: "MZ", value: "Mizoram" },
    { Key: "NL", value: "Nagaland" },
    { Key: "OR", value: "Odisha" },
    { Key: "PY", value: "Puducherry" },
    { Key: "PB", value: "Punjab" },
    { Key: "RJ", value: "Rajasthan" },
    { Key: "SK", value: "Sikkim" },
    { Key: "TN", value: "Tamil Nadu" },
    { Key: "TS", value: "Telangana" },
    { Key: "TR", value: "Tripura" },
    { Key: "UK", value: "Uttar Pradesh" },
    { Key: "UP", value: "Uttarakhand" },
    { Key: "WB", value: "West Bengal" },
  ];

  return (
    <View style={styles.firstView}>
      <Text style={styles.crimeOccuringText}>
        Is the crime occuring right now?
      </Text>

      {/* <CheckBox
        title="Yes"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={!askTime}
        onPress={() => {
          setAskTime(false);
          setFormData({ ...formData, time: Date.now() });
        }}
      />

      <CheckBox
        title="No"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={askTime}
        onPress={() => setAskTime(true)}
      /> */}
      <TextInput
        placeholderTextColor="darkgray"
        placeholder="Yes / No"
        style={styles.textInput2}
      ></TextInput>

      <Text style={styles.stateCrimeOccuringText}>
        What state was this crime in?
      </Text>

      <View style={styles.stateSelectionView}>
        <SelectList
          onSelect={() => setFormData({ ...formData, location: selectedState })}
          setSelected={setSelectedState}
          data={data}
          // arrowicon={<FontAwesome name="Roboto" size={12} color={'black'} />}
          // searchicon={<FontAwesome name="Roboto" size={12} color={'black'} />}
          search={true}
          boxStyles={{ borderRadius: 0 }}
          placeholder="Select state"
        />
      </View>
      {/* <Text style={styles.cityCrimeOccuringText}>What city?</Text>
      <View style={styles.citySelectionView}>
        <SelectList
          onSelect={() => alert(selected)}
          setSelected={setSelectedState}
          data={data}
          // arrowicon={<FontAwesome name="Roboto" size={12} color={'black'} />}
          // searchicon={<FontAwesome name="Roboto" size={12} color={'black'} />}
          search={true}
          boxStyles={{ borderRadius: 0 }}
          placeholder="Select city"
        />
      </View> */}
      <Text style={styles.exactAddress}>Do you have an exact address??</Text>

      <View style={styles.textInputView}>
        <TextInput
          placeholder="Enter Address"
          onChangeText={(newText) => {
            // setText(newText);
            setFormData({ ...formData, exact_address: newText });
          }}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

export default CrimeDetailsScreenOne;

const styles = StyleSheet.create({
  firstView: {
    margin: 20,
    flex: 1,
    flexDirection: "column",
    display: "flex",
  },

  firstRadioButtonView: {
    margin: 7,
    display: "flex",
    flexDirection: "row",
  },

  secondRadioButtonView: {
    margin: 7,
    display: "flex",
    flexDirection: "row",
  },

  crimeOccuringText: {
    margin: 7,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },
  textInput2: {
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

  addFileButton: {
    width: 154,
    height: 39,
    backgroundColor: "#4285F4",
    borderRadius: 5,
  },

  stateCrimeOccuringText: {
    margin: 7,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },

  stateSelectionView: {
    margin: 7,
  },

  citySelectionView: {
    margin: 7,
  },

  cityCrimeOccuringText: {
    margin: 7,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },

  exactAddress: {
    margin: 7,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },

  firstAddressRadioButtonView: {
    margin: 7,
    display: "flex",
    flexDirection: "row",
  },

  secondAddressRadioButtonView: {
    margin: 7,
    display: "flex",
    flexDirection: "row",
  },

  textInputView: {
    margin: 7,
  },

  textInput: {
    boxsizing: "borderbox",
    width: "auto",
    height: 167,
    textAlign: "center",
    backgroundColor: "#FCFAFA",
    borderWidth: 1,
    solid: "#919191",
    borderradius: 5,
    backgroundColor: "transparent",
  },
  takenTextInput: {
    // margin:10,
    width: "auto",
    height: 50,
    backgroundColor: "#FCFAFA",
    borderWidth: 1,
    solid: "#919191",
    borderRadius: 5,
    margin: 10,
    textAlign: "center",
    backgroundColor: "transparent",
  },
});
