import React, { useState } from "react";
import { Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Box } from "native-base";
import { CommonBtn } from "@/components/Buttons";
import { useRouter } from "expo-router";
import { ImageBackground } from "expo-image";
import SelButton from "@/components/Buttons/SelectBtn";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EnterPhone = () => {

    const router = useRouter();
    const [selected, setSelected] = useState<any>({});

    const [details, setDetails] = useState<any>([
        // {
        //     title: "מזל",
        //     options: [
        //         "גדי", "דלי", "דגים",
        //         "טלה", "שור", "תאומים",
        //         "סרטן", "אריה", "בתולה",
        //         "מאזניים", "עקרב", "קשת"
        //     ],
        //     selected: ""
        // },
        // {
        //     title: "השכלה",
        //     options: [
        //         "אקדמאית", "על תיכונית", "תיכונית"
        //     ],
        //     selected: ""
        // },
        // {
        //     title: "כושר",
        //     options: [
        //         "תדירות גבוהה", "מידי פעם", "בכלל לא"
        //     ],
        //     selected: ""
        // },
        // {
        //     title: "בעלי חיים",
        //     options: [
        //         "איכס שיערות", "אין לי אבל חולה עליהם", "אי אפשר בלי"
        //     ],
        //     selected: ""
        // },
        // {
        //     title: "תזונה",
        //     options: [
        //         "טבעוני", "צמחוני", "רגיל", "כשר", "קרניבור"
        //     ],
        //     selected: ""
        // },
        // {
        //     title: "עישון",
        //     options: [
        //         "בסופי שבוע", "בכלל לא", "מעשן", "באירועים"
        //     ],
        //     selected: ""
        // },
        // {
        //     title: "שתיית אלכוהול",
        //     options: [
        //         "בסופי שבוע", "בישיבות עם חברים", "בכלל לא", "הבקבוק זה אח"
        //     ],
        //     selected: ""
        // },
        // {
        //     title: "מדיה חברתית",
        //     options: [
        //         "משפיען", "24/7", "פעיל קצת", "לא פעיל בכלל"
        //     ],
        //     selected: ""
        // },
        {
            title: "חיי לילה",
            options: [
                "פאב זה נחמד", "ישיבות עם חברים", "מעדיף בבית",
                "חיית מסיבות", "בסופי שבוע"
            ],
            selected: ""
        },
        {
            title: "אומנות",
            options: [
                "אומן בדם", "נחמד לראות", "מה לי ולזה"
            ],
            selected: ""
        },
        {
            title: "עמדה פוליטית",
            options: [
                "שמאל", "ימין", "לא מתעניין", "מרכז"
            ],
            selected: ""
        },
        {
            title: "עדה",
            options: [
                "מצרי, פרסי"
            ],
            selected: ""
        },
        {
            title: "ממתק אהוב",
            options: [
                "גומי", "קרמבו", "סוכריה", "דוריטוס", "ביסלי",
                "במבה", "קינדר", "אוראו", "צ׳יטוס"
            ],
            selected: ""
        },
        {
            title: "סגנון לבוש",
            options: [
                "צנוע", "אלגנט", "רגיל",
                "וואנזי", "חשוף כי יש מה להראות",
                "קינקי"
            ],
            selected: ""
        }
    ]);

    return (
        <ImageBackground source={require("@/assets/images/background.png")} style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: "center", padding: 30 }}>
                {
                    // Add a check to render only if details is an array
                    Array.isArray(details) && details.map((item: any, index1: number) => {
                        return (
                            <Box key={item.title} style={{ marginTop: "7%"}}>
                                <Text
                                    style={{ fontFamily: "Heebo", fontSize: 19, fontWeight: "bold" }}
                                >{item.title}</Text>
                                <Box flex={1} style={styles.sel_box}>
                                    {item.options.map((option: any, index: number) => {
                                        return (
                                            <SelButton
                                                isSelected={item.selected === option}
                                                key={`option-${index1}-${index}`}
                                                onPress={() => {
                                                    let tmpDetails = [...details];
                                                    tmpDetails[index1].selected = option;
                                                    setDetails(tmpDetails);
                                                }}
                                                width={width * 0.24} height={width * 0.07}
                                                marginBottom={width * 0.04} marginStart={width * 0.04}
                                            >{option}</SelButton>
                                        )
                                    })}
                                </Box>
                            </Box>
                        )
                    })
                }

                <CommonBtn style={styles.next} title="סיום" onPress={() => { router.push("/(tabs)") }} />
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
        marginTop: "3%",
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