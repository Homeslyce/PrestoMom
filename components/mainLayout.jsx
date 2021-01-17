import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Appbar, Button } from "react-native-paper";
import mainLogo from "../assets/mainLogo.png";
import { colors } from "../styles/base";

export default function MainLayout() {
    const [isMainPage, setIsMainpage] = useState(true);

    function goBack() {
        setIsMainpage(true);
    }

    function goReceipe() {
        setIsMainpage(false);
    }

    return (
        <View style={styles.mainContainer}>
            {isMainPage ? (
                <View style={styles.mainHeader}>
                    <Image style={styles.headerLogo} source={mainLogo} />
                </View>
            ) : (
                <Appbar.Header style={{ backgroundColor: colors.primary }}>
                    <Appbar.BackAction onPress={() => goBack()} />
                    <Appbar.Content title="Recettes" />
                </Appbar.Header>
            )}
            <Text>Main Layout!!</Text>
            <Button mode="contained" style={styles.receipe} onPress={() => goReceipe()}>
                Recettes
            </Button>
        </View>
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
