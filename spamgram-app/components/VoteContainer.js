import Downvote from "./Downvote";
import Upvote from "./Upvote";
import { View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

function VoteContainer({ votes, upvote, downvote, pressed }) {
    function getVoteColor() {
        if (pressed == -1) {
            return "rgba(255, 255, 255, 0.5)";
        } else if (pressed == 0) {
            return "#FF8383";
        } else {
            return "#AAFF83";
        }
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Upvote pressed={pressed} upvote={upvote} />
            <Text
                style={{
                    color: getVoteColor(),
                    fontSize: RFValue(22, 926),
                    fontWeight: "600",
                }}
            >
                {votes}
            </Text>
            <Downvote pressed={pressed} downvote={downvote} />
        </View>
    );
}

export default VoteContainer;
