import React, {  } from "react";
import { Text, View, StyleSheet } from "react-native";
import { IconButton, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function Header(props: any) {
    const navigator = props.navigation;

    const back_url = props.back;

    return (
        <View style={styles.container}>
            <IconButton
                icon={<Icon as={Ionicons} name="arrow-back" size="lg" color="black" />}
                style={styles.button}
                onPress={() => {
                    if(back_url !== undefined){
                        navigator.goBack();
                    }
                    else{
                        navigator.push("index");
                    }
                }}
            />
            <Text style={styles.title}>{props.options.headerTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        height: 50,
        width: "100%",
        backgroundColor: "transparent",
        alignItems: "center",
        position: "relative",
    },
    button: {
        position: "absolute",
        left: "5%",
        height: "100%",
    },
    title: {
        fontFamily: "Heebo",
        fontSize: 20,
        fontWeight: "bold",
        margin: "auto"
    },
});