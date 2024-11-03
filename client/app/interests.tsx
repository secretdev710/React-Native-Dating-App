import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Input, Pressable, Box } from "native-base";
import { CommonBtn } from "@/components/Buttons";
import { useRouter } from "expo-router";
import { ImageBackground } from "expo-image";
import SelButton from "@/components/Buttons/SelectBtn";

const EnterPhone = () => {

    const router = useRouter();
    const [selected, setSelected] = useState<any>({});

    const interestsList = [
        "קריאה", "מוזיקה", "שחייה",
        "צילום", "סנוקר", "בישול",
        "יוגה", "נטפליקס", "סרטים",
        "קפה", "תה", "ים",
        "קמפינג", "ספורט", "כושר",
        "שופינג", "סאונה", "על האש",
        "מסיבות", "פאבים", "אוכל",
        "סטנדאפ", "טיפול עצמי", "ריקוד",
        "באולינג", "שופינג אונליין", "פיקניק",
        "פרישייק", "לחימה אומנותית"
    ];

    const onSelectBtn = (item: any) => {
        let tmp = { ...selected };
        tmp[item] = !tmp[item];
        setSelected(tmp);
    }

    return (
        <ImageBackground source={require("@/assets/images/background.png")} style={styles.container}>
            <Text style={styles.text1}>בחירת תחומי עניין</Text>
            <Text style={styles.text2}>בחרו לפחות 3 תחומי עניין שהכי מאפיינים אתכם</Text>
            <Box flex={1} style={styles.sel_box}>
                {interestsList.map((item, index) => {
                    return (
                        <SelButton
                            isSelected={selected[item]}
                            key={index} onPress={() => onSelectBtn(item)}
                            width="28%" height="7%" marginBottom="4%" marginStart="5.3%"
                        >{item}</SelButton>
                    )
                })}
            </Box>

            <CommonBtn style={styles.next} title="סיום" onPress={() => { router.push("/moredetail") }} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
        paddingTop: 5
    },
    text1: {
        width: "100%",
        fontFamily: 'Heebo',
        fontSize: 19,
        fontWeight: 'bold',
    },
    text2: {
        marginTop: "1%",
        fontFamily: 'Heebo',
        fontSize: 14,
        fontWeight: 'bold',
        width: "100%",
        color: "#DD527B",
    },
    sel_box: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        marginTop: "10%",
        width: "100%",
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
    },
    next: {
        width: "80%",
        marginTop: "10%",
    }
});

export default EnterPhone