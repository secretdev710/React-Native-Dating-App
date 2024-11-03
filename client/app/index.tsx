import React, { useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Animation() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/welcome");
        }, 3000);
    })
    return (
        <ImageBackground source={require("@/assets/images/splash.png")} style={styles.splash}>
            <LottieView
                style={{
                    position: 'absolute',
                    top: "25%",
                    width: width * 0.8,
                    height: width * 0.8,
                    backgroundColor: 'transparent',
                }}
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
        alignItems: "center",
    },
});