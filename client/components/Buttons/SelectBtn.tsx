import { useState } from "react";
import { Pressable, Text } from "native-base";
import { StyleSheet } from "react-native";

const SelButton = (props: any) => {

    const styles = StyleSheet.create({
        sel_button: {
            borderRadius: 10,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "#C0C0C0",
        },
        sel_button_selected: {
            backgroundColor: "#DD527B",
        },
        sel_text: {
            textAlign: "center",
            fontSize: 12,
            fontFamily: 'Heebo',
            fontWeight: 900,
            margin: "auto",
        },
        sel_text_selected: {
            color: "white",
        },
    })

    return (
        <Pressable
            borderRadius={10} borderWidth={1} borderColor={"#C0C0C0"}
            style={{ ...styles.sel_button, ...props.isSelected && styles.sel_button_selected }}
            {...props} onPress={() => props.onPress()}
        ><Text style={{ ...styles.sel_text, ...props.isSelected && styles.sel_text_selected }}>{props.children}</Text>
        </Pressable>
    )
}

export default SelButton