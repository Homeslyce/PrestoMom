import "react-native-gesture-handler"; //must be at the top
import React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import HomeScreen from "./components/home/homeScreen";
import RecipeScreen from "./components/recipe/recipeScreen";
import GroceryListScreen from "./components/groceryList/groceryListScreen";
import CalendatScreen from "./components/calendar/calendarScreen";
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
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <Stack.Screen
                    name="Accueil"
                    component={HomeScreen}
                    options={{
                        headerTitle: function homepageHeader() {
                            return <Image style={styles.headerLogo} source={mainLogo} />;
                        },
                    }}
                />
                <Stack.Screen name="Recipe" component={RecipeScreen} options={{ title: "Recettes" }} />
                <Stack.Screen
                    name="GroceryList"
                    component={GroceryListScreen}
                    options={{ title: "Liste d'épicerie" }}
                />
                <Stack.Screen name="Calendar" component={CalendatScreen} options={{ title: "Calendrier" }} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerLogo: {
        width: 175,
        height: 45,
        alignSelf: "center",
    },
});
