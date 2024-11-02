import React, { useState } from "react";
import { Input, Image, Text, Box, Pressable, TextArea, Select } from "native-base"
import { StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function (props: any) {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState("");

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        setDate(date.toLocaleDateString());
        hideDatePicker();
    };

    return (
        <Box mt="4" flexDirection="row"
            alignItems="center" rounded="md"
            style={{ ...props.style, ...styles.container }}
            {...props}
        >
            <Box position="absolute" left="0" zIndex={1}>
                <Image
                    alt=""
                    source={props.icon}
                    w={7} h={7}
                    style={styles.icon}
                    rounded={"sm"}
                />
            </Box>
            {
                props.type === "select" ?
                    <Select
                        width={props.width}
                        borderColor={"#DD527B"}
                        borderRadius={10}
                        dropdownIcon={<Text></Text>}
                        backgroundColor={"white"}
                        placeholder={undefined}
                        textAlign={"right"}
                        paddingTop={8}
                        paddingRight={2}
                        pl="10"  // Add padding to leave space for the icon
                    >
                        {props.children}
                    </Select> : props.type === "text" ?
                        <Input
                            textAlign={"right"}
                            width={props.width}
                            borderColor={"#DD5278"}
                            borderRadius={10}
                            backgroundColor={"white"}
                            paddingTop={8}
                            paddingBottom={0}
                            pl={10}
                        /> : props.type === "date" ?
                            <Pressable
                                width={props.width}
                                style={{
                                    borderWidth: 1,
                                    borderColor: "#DD527B",
                                    borderRadius: 10,
                                    height: 68
                                }}
                                borderColor={"#DD527B"}
                                borderRadius={10}
                                backgroundColor={"white"}
                                onPress={() => {
                                    setDatePickerVisibility(true);
                                }}
                                paddingTop={7}
                                paddingRight={2}
                            ><Text style={{ marginTop: 6, textAlign: "right", fontSize: 12 }}>{date}</Text></Pressable> :
                            <TextArea
                                width={props.width}
                                autoCompleteType={"off"}
                                borderColor={"#DD527B"}
                                borderRadius={10}
                                backgroundColor={"white"}
                                paddingTop={9}
                                pl={10}
                                textAlign={"right"}
                            />

            }
            <Box style={{position: "absolute", right: 10, top: 13}}>
                <Text style={styles.label}>{props.title}</Text>
            </Box>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: "Inter",
        fontSize: 20,
        padding: 2,
    },
    icon: {
        margin: 10,
        marginRight: 0
    },
    right: {
        margin: 10,
        marginLeft: 0
    },
    title: {
        color: "#DD527B"
    },
    label: {
        color: "#DD527B",
        fontWeight: "500",
        fontFamily: "Inter",
        fontSize: 10,
    }
});