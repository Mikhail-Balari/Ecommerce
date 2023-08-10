import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";

const AddButton = ({
    title = "",
    onPress = () => {},
    color = colors.pink,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: colors.darkmatter }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "50%",
        borderRadius: 20,
        backgroundColor: colors.darkmatter,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        margin: 10,
    },
    text: {
        fontFamily: "Roboto",
        fontSize: 18,
        color: colors.primary,
    },
});