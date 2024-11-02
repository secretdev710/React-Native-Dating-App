import React, { useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { Box } from "native-base";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Animation() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/welcome");
        }, 1000);
    })
    return (
        <ImageBackground source={require("@/assets/images/splash.png")} style={styles.splash}>
            <LottieView
                source={require("../assets/lottie/smily.json")}
                autoPlay
                loop
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        width,
        height,
        paddingTop: "20%",
    },
});