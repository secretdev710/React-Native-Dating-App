import React, { useState } from "react";
import { Pressable, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { ImageBackground, Dimensions } from "react-native";
import { Select, Box, Image, HStack, VStack } from 'native-base';
import * as ImagePicker from 'expo-image-picker';

import ProfileInput from "@/components/ProfileInput";
import { CommonBtn } from "@/components/Buttons";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EnterPhone = () => {
    const router = useRouter();

    const [userInfo, setUserInfo] = useState({
        name: "",
        birth: "",
        gender: "male",
        status: "single",
        description: ""
    });

    const [images, setImages] = useState<string[]>(new Array(6).fill(""));

    const onPickImage = async (index: number) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            let tmp_images = [...images];
            tmp_images[index] = result.assets[0].uri;
            setImages(tmp_images);
        }
    };

    return (
        <ImageBackground source={require("@/assets/images/background.png")} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Box>
                    <ProfileInput type="text" title="שם מלא" width={width * 0.8} icon={require("@/assets/images/icon-man.png")} />
                    <ProfileInput type="date" title="תאריך לידה" width={width * 0.8} icon={require("@/assets/images/birth.png")} />
                    <ProfileInput
                        type="select" title="מגדר"
                        width={width * 0.8}
                        icon={require("@/assets/images/gender.png")}
                    >
                        <Select.Item label="זָכָר" value="male" />
                        <Select.Item label="נקבה" value="female" />
                    </ProfileInput>
                    <ProfileInput
                        type="select" title="סטטוס"
                        width={width * 0.8}
                        icon={require("@/assets/images/status.png")}
                    >
                        <Select.Item label="רווקה" value="single" />
                        <Select.Item label="נָשׂוּי" value="married" />
                    </ProfileInput>
                    <ProfileInput
                        type="text-area"
                        title="קצת עלייך"
                        icon={require("@/assets/images/describ.png")}
                        width={width * 0.8}
                    />
                </Box>
                <VStack style={styles.images} justifyContent={"space-between"}>
                    <HStack justifyContent={"space-between"}>
                        <Pressable
                            style={{ ...styles.upload, ...{ width: "63%", height: width * 0.5, backgroundColor: "white" } }}
                            onPress={() => onPickImage(0)}
                        >
                            {
                                images[0].length
                                    ? <Image alt="ph1" style={{ width: "100%", height: "100%", borderRadius: 16 }} source={{ uri: images[0] }} />
                                    : <Image alt="" style={{ margin: "auto" }} source={require("@/assets/images/upload.png")} />
                            }
                        </Pressable>
                        <VStack style={{ width: "28%", height: width * 0.5 }} justifyContent={"space-between"}>
                            <Pressable
                                style={{ ...styles.upload, ...{ width: "100%", height: "45%", backgroundColor: "white" } }}
                                onPress={() => onPickImage(1)}
                            >
                                {
                                    images[1].length
                                        ? <Image alt="ph1" style={{ width: "100%", height: "100%", borderRadius: 16 }} source={{ uri: images[1] }} />
                                        : <Image alt="" style={{ margin: "auto" }} source={require("@/assets/images/upload.png")} />
                                }
                            </Pressable>
                            <Pressable
                                style={{ ...styles.upload, ...{ width: "100%", height: "45%", backgroundColor: "white" } }}
                                onPress={() => onPickImage(2)}
                            >
                                {
                                    images[2].length
                                        ? <Image alt="ph1" style={{ width: "100%", height: "100%", borderRadius: 16 }} source={{ uri: images[2] }} />
                                        : <Image alt="" style={{ margin: "auto" }} source={require("@/assets/images/upload.png")} />
                                }
                            </Pressable>
                        </VStack>
                    </HStack>
                    <HStack style={{ width: width * 0.8, marginTop: "5%", height: width * 0.225 }} justifyContent={"space-between"}>
                        <Pressable
                            style={{ ...styles.upload, ...{ width: width * 0.225, height: "100%", backgroundColor: "white" } }}
                            onPress={() => onPickImage(3)}
                        >
                            {
                                images[3].length
                                    ? <Image alt="ph1" style={{ width: "100%", height: "100%", borderRadius: 16 }} source={{ uri: images[3] }} />
                                    : <Image alt="" style={{ margin: "auto" }} source={require("@/assets/images/upload.png")} />
                            }
                        </Pressable>
                        <Pressable
                            style={{ ...styles.upload, ...{ width: width * 0.225, height: "100%", backgroundColor: "white" } }}
                            onPress={() => onPickImage(4)}
                        >
                            {
                                images[4].length
                                    ? <Image alt="ph1" style={{ width: "100%", height: "100%", borderRadius: 16 }} source={{ uri: images[4] }} />
                                    : <Image alt="" style={{ margin: "auto" }} source={require("@/assets/images/upload.png")} />
                            }
                        </Pressable>
                        <Pressable
                            style={{ ...styles.upload, ...{ width: width * 0.225, height: "100%", backgroundColor: "white" } }}
                            onPress={() => onPickImage(5)}
                        >
                            {
                                images[5].length
                                    ? <Image alt="ph1" style={{ width: "100%", height: "100%", borderRadius: 16 }} source={{ uri: images[5] }} />
                                    : <Image alt="" style={{ margin: "auto" }} source={require("@/assets/images/upload.png")} />
                            }
                        </Pressable>
                    </HStack>
                </VStack>

                <CommonBtn style={styles.next} title="שמירה" onPress={() => { router.push("/interests") }} />
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    scrollContent: {
        alignItems: 'center',
        paddingRight: 5,
        width: width,
        paddingBottom: 20, // Add some padding at the bottom to prevent content from being cut off
    },
    images: {
        marginTop: "10%",
        width: width * 0.8,
        flex: 1,
        justifyContent: "space-between"
    },
    upload: {
        borderColor: "#DD527B",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 16,
    },
    next: {
        width: width * 0.8,
        marginTop: "10%",
    }
});

export default EnterPhone;
