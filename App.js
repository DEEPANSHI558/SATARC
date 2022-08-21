import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";
import Form from "./screens/Form";
import Otp from "./screens/Otp";
import Task from "./screens/Task";
import RootStack from "./navigation/RootStack";

export default function App() {
  return <RootStack></RootStack>;
}
