import {
    View,
    StyleSheet,
    Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import HomeHeader from "../components/Header/HomeHeader";
import PostCardDetailed from "../components/PostCardDetailed";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function PostScreen(props) {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#090909",
            }}
        >
            <HomeHeader user={props.route.params.user}/>
            <View
                style={{
                    flex: 1,
                    marginTop: RFValue(135, 926),
                    padding: 15,
                }}
            >
                <PostCardDetailed props={props} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        color: "white",
        fontSize: RFValue(30, 926),
        fontWeight: "bold",
    },
    subheader: {
        color: "white",
        fontSize: RFValue(30, 926),
        fontWeight: "200",
    },
    menuOption: {
        padding: RFValue(24, 926),
        margin: RFValue(12, 926),
        backgroundColor: "#0F0F10",
        width: (399 / 428) * SCREEN_WIDTH,
        borderColor: "#FCCFFD",
        borderWidth: 1,
        borderRadius: 15,
    },
    menuOptionText: {
        color: "white",
        fontSize: RFValue(32, 926),
        textAlign: "center",
    },
    headSection: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: RFValue(50, 926),
    },
});
