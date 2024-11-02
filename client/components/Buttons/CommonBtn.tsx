import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text } from "react-native";

const CommonBtn = (props: any) => {
    const { title, onPress } = props;

    return (
        <LinearGradient
            colors={["#FF84A7", "#E03368"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ ...props.style, borderRadius: 10 }}
        >
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1,
                    },
                    styles.btn
                ]}
                disabled={props.disabled}
            >
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 13,
        paddingHorizontal: 72,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export default CommonBtn