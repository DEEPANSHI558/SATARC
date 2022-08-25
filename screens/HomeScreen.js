import React, { useState } from "react";
import Popup from "./Popup";
import { useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [tipTimeout, setTipTimeout] = useState(300);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (tipTimeout > 0) {
        setTipTimeout((time) => time - 1);
      }
    }, 1000);
  }, [tipTimeout]);

  const minutes = Math.floor(tipTimeout / 60);
  const seconds = tipTimeout - minutes * 60;
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Popup modalVisible={showModal} setModalVisible={setShowModal}></Popup>
      <View style={styles.header}>
        <Text style={styles.headerText}>SATARC</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.alert}>
          <Text style={styles.alertText}>
            Your verification is pending, complete{" "}
            <Text
              style={{ textDecoration: "underline" }}
              onClick={() => {
                navigation.navigate("verification");
              }}
            >
              user verification here
            </Text>
            .
          </Text>
        </View>
        <View style={styles.statusCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.alertText}>UserID: 9827298296</Text>
            <Text style={styles.tipCount}>3 TIPS</Text>
            <Text style={styles.alertText}>
              Timeout: {minutes} min {seconds} sec
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.styledButton}
              onPress={() => {
                setShowModal(true);
              }}
            >
              <Text style={styles.buttonText}>SUBMIT A TIP</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ fontSize: 24, marginTop: -4 }}>MY TIPS</Text>
        {/* TODO: Dynamically render tips */}
        <View style={styles.tipContainer}>
          <View style={styles.tipCard}></View>
          <View style={styles.tipCard}></View>
          <View style={styles.tipCard}></View>
          <View style={styles.tipCard}></View>
          <View style={styles.tipCard}></View>
          <View style={styles.tipCard}></View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    // fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
  },
  header: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 28,
  },
  body: {
    width: "100%",
    height: "100%",
    rowGap: 25,
  },
  alert: {
    backgroundColor: "pink",
    height: 45,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: "#f8c950",
  },
  alertText: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 14,
  },
  statusCard: {
    height: 120,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    padding: 14,
    flexDirection: "row",
  },
  tipCount: {
    fontSize: 24,
    paddingLeft: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  styledButton: {
    backgroundColor: "#fb3e3e",
    height: 64,
    width: 135,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: 700,
    fontSize: 16,
  },
  tipCard: {
    height: 66,
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
  },
  tipContainer: {
    rowGap: 2,
    marginTop: -15,
  },
});
