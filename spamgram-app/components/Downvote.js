import { TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Downvote({ pressed, downvote }) {
    return (
        <TouchableWithoutFeedback
            onPress={() => downvote()}
            style={{
                borderRadius: "50%",
            }}
        >
            <AntDesign
                name="caretdown"
                size={48}
                color={pressed == 0 ? "#FF8383" : "rgba(255, 131, 131, 0.5)"}
            />
        </TouchableWithoutFeedback>
    );
}

export default Downvote;
