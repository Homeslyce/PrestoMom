import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import MainLayout from "./components/mainLayout";

export default function App() {
    return (
        <PaperProvider>
            <View>
                <MainLayout />
                <StatusBar style="auto" />
            </View>
        </PaperProvider>
    );
}
