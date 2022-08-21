import axios from "axios";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import routes from "../apiRoutes";
const Otp = ({ route, navigation }) => {
  const submitData = async (values) => {
    console.log(values);
    // await axios.post(routes.login+"/"+route.param.userId,values);
  };
  return (
    <View>
      <Text>Your OTP is {route.params.otp}</Text>
      <Text>User Id {route.params.userId}</Text>
    </View>
  );
};

export default Otp;
