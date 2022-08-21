import React from "react";
//React navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
import Welcome from "./../screens/Welcome";
import Form from "./../screens/Form";
import Task from "./../screens/Task";
import HomeScreen from "./../screens/HomeScreen";
import Test from "../screens/Test";
import Otp from "../screens/Otp";
import IdentityVerification from "../screens/IdentityVerification";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyled: {
            backgroundColor: "transparent",
          },
          headerTintColor: "#1F2937",
          headerTransparent: true,
          headerTitle: "",
          headerLeftContainerStyle: {
            paddingLeft: 0,
          },
        }}
      >
        {/* <Stack.Screen name="Test" component={Test} /> */}
        <Stack.Screen
          // options={{ headerTintColor: "#ffffff" }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="verification" component={IdentityVerification} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="Form" component={Form} />

        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
