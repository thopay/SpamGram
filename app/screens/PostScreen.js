import { View, StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import HomeHeader from "../components/HomeHeader";
import PostCardDetailed from "../components/PostCardDetailed";

export default function PostScreen(props) {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#090909",
            }}
        >
            <HomeHeader user={props.route.params.user} />
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