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
import InvestigationVerfication from "../screens/InvestigationVerification";

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
            paddingLeft: 20,
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />        
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          // options={{ headerTintColor: "#ffffff" }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Task" component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
