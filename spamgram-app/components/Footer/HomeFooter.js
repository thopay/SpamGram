import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function HomeFooter({ screen, setScreen, allowChat }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <TouchableWithoutFeedback onPress={() => setScreen(0)}>
                    <MaterialCommunityIcons
                        name="map-marker-radius"
                        size={40}
                        color={
                            screen == 0 ? "white" : "rgba(255, 255, 255, 0.25)"
                        }
                        style={{
                            top: -10,
                            marginRight: allowChat ? 30 : 0,
                        }}
                    />
                </TouchableWithoutFeedback>
                <View style={{
                    display: allowChat ? '' : 'none'
                }}>
                    <TouchableWithoutFeedback
                        onPress={() => setScreen(1)}
                    >
                        <AntDesign
                            name="message1"
                            size={40}
                            color={
                                screen == 1 ? "white" : "rgba(255, 255, 255, 0.25)"
                            }
                            style={{
                                top: -10,
                                marginLeft: 30,
                            }}
                        />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1D1E21",
        position: "absolute",
        bottom: 0,
        height: RFValue(105, 926),
        width: "100%",
        zIndex: 3,
        borderColor: "#000",
        borderWidth: 2,
    },
});

export default HomeFooter;
