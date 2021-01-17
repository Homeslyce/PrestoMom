import "react-native-gesture-handler"; //must be at the top
import React from "react";
//import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/home/homeScreen";
import RecipeScreen from "./components/recipe/recipeScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Welcome" }} />
                <Stack.Screen name="Recipe" component={RecipeScreen} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
