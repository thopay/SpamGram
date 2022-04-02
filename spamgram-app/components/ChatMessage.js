import { View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import moment from "moment";
import Avatar from "./Avatar";

function ChatMessage(props) {
    return (
        <View
            style={{
                width: "100%",
                backgroundColor: "#0F0F10",
                minHeight: RFValue(80, 926),
                borderRadius: 15,
                borderColor: props.data.authorColor,
                borderWidth: 1,
                padding: 10,
                marginBottom: 10,
                marginTop: 10,
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        width: "50%",
                    }}
                >
                    <Avatar
                        height={22}
                        width={22}
                        color={props.data.authorColor}
                        radius={"50%"}
                        fontSize={12}
                        emoji={props.data.authorEmoji}
                    />
                    <Text
                        style={{
                            color: props.data.authorColor,
                            overflow: "hidden",
                            fontSize: RFValue(22, 926),
                            marginLeft: 5,
                        }}
                    >
                        {props.data.author}
                    </Text>
                </View>
                <View
                    style={{
                        width: "50%",
                        alignItems: "flex-end",
                    }}
                >
                    <Text
                        style={{
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: RFValue(16, 926),
                        }}
                    >
                        {moment(props.data.timestamp).fromNow()}
                    </Text>
                </View>
            </View>
            <Text
                style={{
                    color: "#fff",
                    fontSize: RFValue(20, 926),
                    marginTop: 5,
                }}
            >
                {props.data.text}
            </Text>
        </View>
    );
}

export default ChatMessage;
