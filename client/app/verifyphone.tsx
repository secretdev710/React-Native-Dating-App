import React from "react";
import { Text, StyleSheet } from "react-native";
import { CommonBtn } from "@/components/Buttons";
import { useRouter, useLocalSearchParams } from "expo-router";
import { ImageBackground } from "react-native";

import SmsInput from "@/components/SmsInput";

const EnterPhone = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

    const phoneNumber = params.number;

    return (
        <ImageBackground source={require("@/assets/images/background.png")} style={styles.container}>
            <Text style={styles.text1}>קוד אימות</Text>
            <Text style={styles.text2}>אנא הזן את הקוד שהתקבל למספר:</Text>
            <Text style={styles.ph_number}>{phoneNumber}</Text>
            <SmsInput />
            <Text style={styles.text3}>לא קיבלת קוד? לחץ לקבלת קוד חוזר</Text>
            <Text style={styles.resend_code} onPress={() => { }}>שלח שוב</Text>
            <CommonBtn style={styles.next} title="אישור" onPress={() => { router.push("/profile") }} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text1: {
        marginTop: "15%",
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
        marginBottom: "1%"
    },
    ph_number: {
        fontFamily: 'Rubik',
        fontWeight: '900',
        fontSize: 16,
        marginBottom: "10%"
    },
    resend_code: {
        fontWeight: '500',
        color: "#DD527B",
        textDecorationLine: "underline",
        cursor: 'pointer'
    },
    code: {
        width: "70%",
    },
    text3: {
        fontFamily: 'Rubik',
        fontSize: 14,
        fontWeight: 'regular',
        textAlign: 'center',
        marginTop: "5%",
        width: "60%",
    },
    next: {
        width: "80%",
        marginTop: "10%",
    }
});

export default EnterPhone