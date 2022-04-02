import { useState } from "react";
import {
    View,
    Text,
    TouchableHighlight,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Avatar from "../Avatar";

function HomeHeader() {
    const [pressed, setPressed] = useState(false);
    const navigation = useNavigation();

    return (
        <View
            style={{
                backgroundColor: "#1D1E21",
                width: "100%",
                height: RFValue(150, 926),
                position: "absolute",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                zIndex: 3,
            }}
        >
            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        bottom: 0,
                        width: "100%",
                        padding: 14,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Avatar
                            height={48}
                            width={48}
                            color={"#FCCFFD"}
                            radius={"50%"}
                            fontSize={32}
                            emoji={"🐼"}
                        />
                        <Text
                            style={{
                                color: "#FCCFFD",
                                textAlign: "center",
                                fontSize: RFValue(32, 926),
                                fontWeight: "500",
                                marginLeft: 10,
                            }}
                        >
                            PurplePanda3
                        </Text>
                    </View>
                </View>
                <TouchableHighlight
                    onPressIn={() => setPressed(true)}
                    onPressOut={() => setPressed(false)}
                    onPress={() => navigation.navigate("NewPost", {
                        title: "Fart"
                    })}
                    style={{
                        backgroundColor: "#67FF88",
                        margin: 14,
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        bottom: 0,
                        right: 5,
                        zIndex: 2,
                    }}
                    underlayColor={"#3C8E4E"}
                >
                    <Entypo
                        name="plus"
                        size={30}
                        color={pressed ? "black" : "black"}
                    />
                </TouchableHighlight>
            </View>
        </View>
    );
}

export default HomeHeader;
