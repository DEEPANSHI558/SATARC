import React, { useState } from "react";
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
  return (
    <View style={styles.container}>
      <View style={styles.header}>SATARC</View>
      <View style={styles.body}>
        <View style={styles.alert}>
          <Text style={styles.alertText}>
            Your verification is pending, complete user verification here.
          </Text>
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
    fontFamily: "Roboto, sans-serif",
    fontStyle: "normal",
  },
  header: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 20,
  },
  body: {
    width: "100%",
    height: "100%",
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
});
