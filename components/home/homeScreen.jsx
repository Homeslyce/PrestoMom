import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { colors, margin } from "../../styles/base";
import RecipeLogo from "../../assets/recipeLogo.png";
import GroceryListLogo from "../../assets/groceryListLogo.png";
import CalendarLogo from "../../assets/calendarLogo.png";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                <Text>Top section to insert instructions</Text>
            </View>
            <View style={styles.bottomView}>
                <View style={styles.btnView}>
                    <TouchableOpacity onPress={() => navigation.navigate("Recipe")} style={styles.btn}>
                        <Image source={RecipeLogo} style={styles.btnImage} />
                    </TouchableOpacity>
                    <Text>Recettes</Text>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity onPress={() => navigation.navigate("Calendar")} style={styles.btn}>
                        <Image source={CalendarLogo} style={styles.btnImage} />
                    </TouchableOpacity>
                    <Text>Calendrier</Text>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity onPress={() => navigation.navigate("GroceryList")} style={styles.btn}>
                        <Image source={GroceryListLogo} style={styles.btnImage} />
                    </TouchableOpacity>
                    <Text>Liste d&apos;épicerie</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    topView: { flex: 4, justifyContent: "center", alignItems: "center" },
    bottomView: {
        flex: 1,
        marginBottom: margin.xl,
        justifyContent: "space-evenly",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    btnView: {
        alignItems: "center",
        flexWrap: "wrap",
    },
    btn: { backgroundColor: colors.primary, borderRadius: 10, padding: 10 },
    btnImage: { resizeMode: "contain", height: 65, width: 65 },
});
