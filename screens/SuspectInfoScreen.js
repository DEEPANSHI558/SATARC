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
import { launchImageLibrary } from "react-native-image-picker";

const SuspectInfoScreen = () => {
  const setToastMsg = (msg) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  const uploadFile = () => {
    let options = {
      mediaType: "photo",
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        setToastMsg("Cancelled Image Selection");
      } else if ((response.errorCode = "permission")) {
        setToastMsg("Permission not satisfied");
      } else if ((response.errorCode = "others")) {
        setToastMsg(response.errorMessage);
      } else if (response.assets[0].fileSize > 2097152) {
        Alert.alert(
          "Maximum image size exceeded",
          "Please choose image under 2 MB",
          [{ text: "OK" }]
        );
      }
    });
    // .catch(error=>{
    //   console.log(error);
    // })
  };

  const [inforRegardingSuspect, setinforRegardingSuspect] =
    React.useState("first");
  const [inforRegardingVehicle, setinforRegardingVehicle] =
    React.useState("first");

  return (
    <View style={styles.firstView}>
      <Text style={styles.inforRegardingSuspect}>
        Do you have info regarding the suspect?
      </Text>
      <View style={styles.firstRadioButtonView}>
        <RadioButton
          status={inforRegardingSuspect === "first" ? "checked" : "unchecked"}
          onPress={() => setinforRegardingSuspect("first")}
        />
        <Text style={{ position: "relative", top: 8 }}>Yes</Text>
      </View>
      <View style={styles.secondRadioButtonView}>
        <RadioButton
          status={inforRegardingSuspect === "second" ? "checked" : "unchecked"}
          onPress={() => setinforRegardingSuspect("second")}
        />
        <Text style={{ position: "relative", top: 8 }}>No</Text>
      </View>
      <Text style={styles.vehicleInvolvedText}>
        Is there a vehicle involved?
      </Text>
      <View style={styles.vehicleInvolvedFirst}>
        <RadioButton
          status={inforRegardingVehicle === "first" ? "checked" : "unchecked"}
          onPress={() => setinforRegardingVehicle("first")}
        />
        <Text style={{ position: "relative", top: 8 }}>Yes</Text>
      </View>
      <View style={styles.vehicleInvolvedSecond}>
        <RadioButton
          status={inforRegardingVehicle === "second" ? "checked" : "unchecked"}
          onPress={() => setinforRegardingVehicle("second")}
        />
        <Text style={{ position: "relative", top: 8 }}>No</Text>
      </View>
      <Text style={styles.evidenceText}>Do you have any evidence?</Text>
      <Text style={styles.uploadText}>
        Please upload any pictures, videos, documents regarding the incident if
        any.
      </Text>
      <View style={styles.uploadBorder}>
        <View style={styles.buttonCenterView}>
          <Button
            mode="contained"
            style={styles.addFileButton}
            title="Add File"
            onPress={() => uploadFile()}
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default SuspectInfoScreen;

const styles = StyleSheet.create({
  firstView: {
    margin: 20,
    flex: 1,
    flexDirection: "column",
    display: "flex",
  },

  inforRegardingSuspect: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },

  buttonCenterView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  uploadBorder: {
    marginLeft: 0,
    margin: 10,
    width: "auto",
    height: 172,
    backgroundColor: "#FCFAFA",
    borderWidth: 2,
    dashed: "#595959",
    borderRadius: 5,
    backgroundColor: "transparent",
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

  vehicleInvolvedText: {
    marginLeft: 0,
    margin: 7,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },

  vehicleInvolvedFirst: {
    margin: 7,
    display: "flex",
    flexDirection: "row",
  },

  vehicleInvolvedSecond: {
    margin: 7,
    display: "flex",
    flexDirection: "row",
  },

  evidenceText: {
    marginLeft: 0,
    margin: 7,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },

  uploadText: {
    marginLeft: 0,
    margin: 7,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },
});
