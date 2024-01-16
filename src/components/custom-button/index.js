import React, { Component } from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

function AppButton({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
};

function ButtonIcon({ onPress, icon, title, backgroundColor }) {
    return (
        <View style={styles.appButtonContainer}>
            <Icon.Button
                name={icon}
                backgroundColor={backgroundColor}
                onPress={onPress}
                style={styles.appButton}
            >
                <Text style={styles.appButtonText}>{title}</Text>
            </Icon.Button>
        </View>
    )
};
export default ({AppButton, ButtonIcon});
const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});