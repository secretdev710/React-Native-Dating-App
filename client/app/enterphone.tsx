import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input } from "native-base";
import { CommonBtn } from "@/components/Buttons";
import { useRouter } from "expo-router";
import { ImageBackground } from "expo-image";

const EnterPhone = () => {

    const router = useRouter();

    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <ImageBackground source={require("@/assets/images/background.png")} style={styles.container}>
            <Text style={styles.text1}>מספר טלפון</Text>
            <Text style={styles.text2}>אנו נצטרך את מספר הטלפון שלך על מנת לשלוח קוד לצורכי אימות </Text>
            <Input
                style={styles.input} variant="filled" mx={3}
                placeholder="מספר טלפון" keyboardType="numeric" w="80%"
                onChange={(e) => setPhoneNumber(e.nativeEvent.text)}
            />
            <Text style={styles.text3}>הזן מספר טלפון המכיל מספרים בלבד ללא רווחים או תווים אחרים</Text>
            <CommonBtn style={styles.next} title="הבא"
                onPress={() => {
                    router.push({
                        pathname: "/verifyphone",
                        params: { number: phoneNumber }
                    })
                }}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text1: {
        marginTop: "12%",
        fontFamily: 'Rubik',
        fontSize: 32,
        fontWeight: "bold",
    },
    text2: {
        marginTop: "5%",
        fontFamily: 'Rubik',
        fontSize: 16,
        fontWeight: 'regular',
        textAlign: 'center',
        width: "80%",
        marginBottom: "10%"
    },
    input: {
        textAlign: "center",
        fontSize: 15,
        fontFamily: 'Rubik',
        fontWeight: '500',
        paddingVertical: 14,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#DD527B"
    },
    text3: {
        fontFamily: 'Rubik',
        fontSize: 14,
        fontWeight: 'regular',
        textAlign: 'center',
        marginTop: "5%",
        width: "60%",
        lineHeight: 30
    },
    next: {
        width: "80%",
        marginTop: "10%",
    }
});

export default EnterPhone