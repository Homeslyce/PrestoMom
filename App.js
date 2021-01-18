import "react-native-gesture-handler"; //must be at the top
import React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/home/homeScreen";
import RecipeScreen from "./components/recipe/recipeScreen";
import { StatusBar } from "expo-status-bar";
import { colors } from "./styles/base";
import mainLogo from "./assets/mainLogo.png";

export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: function homepageHeader() {
                            return <Image style={styles.headerLogo} source={mainLogo} />;
                        },
                    }}
                />
                <Stack.Screen name="Recipe" component={RecipeScreen} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    mainContrainer: {
        flex: 1,
        flexDirection: "column",
    },
    mainHeader: {
        backgroundColor: colors.primary,
        paddingTop: 50,
        height: 115,
    },
    headerLogo: {
        width: 200,
        height: 50,
        alignSelf: "center",
    },
    receipe: {
        width: 150,
    },
});
