import { TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Upvote({ pressed, upvote }) {
    return (
        <TouchableWithoutFeedback
            onPress={() => upvote()}
            style={{
                borderRadius: "50%",
            }}
        >
            <AntDesign
                name="caretup"
                size={48}
                color={pressed == 1 ? "#AAFF83" : "rgba(170, 255, 131, 0.5)"}
            />
        </TouchableWithoutFeedback>
    );
}

export default Upvote;
