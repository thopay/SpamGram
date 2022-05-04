import { View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import moment from "moment";

function Comment(props) {
    return (
        <View
            style={{
                width: "100%",
                backgroundColor: "#0F0F10",
                minHeight: RFValue(100, 926),
                borderRadius: 15,
                borderWidth: 1,
                padding: 10,
                marginBottom: 10,
            }}
        >
            <View
                style={{
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
                    <Text
                        style={{
                            color: "rgba(255, 255, 255, 0.5)",
                            overflow: "hidden",
                            fontSize: RFValue(18, 926),
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
                            fontSize: RFValue(18, 926),
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

export default Comment;
