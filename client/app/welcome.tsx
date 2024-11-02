import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { CommonBtn } from "../components/Buttons";
import { Checkbox } from "native-base";
import * as Font from "expo-font";
import { Link, useRouter } from "expo-router";
import { Image } from "expo-image";
import { position } from "native-base/lib/typescript/theme/styled-system";

const mark_img = { uri: "../assets/images/winki-mark.png" };
const back_img = { uri: "../assets/images/welcome-back.png" };

const { width } = Dimensions.get('window');
export default function Welcome() {

    const router = useRouter();
    const [agree, setAgree] = useState(false);

    useEffect(() => {
        Font.loadAsync({
            'Rubik': require('../assets/fonts/Rubik/Rubik-VariableFont_wght.ttf')
        });
    }, []);

    /**
     * Called when the checkbox is pressed. Toggles the agree state.
     * @function
     */
    const onCheck = () => {
        setAgree(!agree);
    }

    return (
        <LinearGradient colors={['#FFFFFF', '#FEE5EC']} style={styles.container}>
            <Image
                alt=""
                source={require("../assets/images/winki-mark.png")}
                style={styles.logo}
            />

            <Image
                alt=""
                source={require("../assets/images/welcome-back.png")}
                style={styles.back}
            />

            <View style={{ position: "absolute", bottom: "25%" }}>
                <Text style={{ textAlign: "center", fontFamily: "Rubik", fontWeight: 700 }}>אפליקציית הכרויות חדשה</Text>
                <Text style={{ textAlign: "center", fontFamily: "Rubik", fontWeight: 700 }}>שתשנה לכם את עולם ההכרויוית!</Text>
            </View>

            <CommonBtn
                title="התחברות"
                onPress={() => { router.push("/enterphone") }}
                style={{ width: width * 0.8, position: "absolute", bottom: "15%" }}
            />

            <View style={styles.check} >
                <Checkbox
                    value="agree"
                    accessibilityLabel=""
                    colorScheme={"danger"}
                    onChange={onCheck}
                    children={<></>}
                />
                <View>
                    <Text style={{ fontFamily: "Rubik", marginRight: 10, fontWeight: 700 }}>בסימון זה אני מאשר/ת שאני מעל גיל 18</Text>
                    <Text style={{ fontFamily: "Rubik", marginRight: 10, fontWeight: 700 }}>ואת<Text style={{ color: "#DD527B" }}>תנאי השימוש ומדיניות הפרטיות</Text></Text>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        position: 'relative',
    },
    back: {
        marginTop: "5%",
        width: width * 0.8,
        height: width * 0.9,
        objectFit: 'contain',
    },
    logo: {
        marginTop: "20%",
        width: "20%",
        height: "6%",
        objectFit: 'contain'
    },
    check: {
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 5,
        justifyContent: "flex-start",
        position: "absolute",
        bottom: "6%",
        width: "80%"
    }
});