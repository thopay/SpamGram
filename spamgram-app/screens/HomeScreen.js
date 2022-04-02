import { useState } from "react";
import {
    Text,
    View,
    TouchableHighlight,
    Image,
    StyleSheet,
    Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import HomeFooter from "../components/Footer/HomeFooter";
import HomeHeader from "../components/Header/HomeHeader";
import PostList from "../components/PostList";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function HomeScreen(props) {
    const posts = props.posts
    const setPosts = props.setPosts

    const navigation = useNavigation();

    const [screen, setScreen] = useState(0)

    const updateVotes = (id, value) => {
        let newPosts = posts.map((post) => {
            if (post.id == id) {
                post.votes = value;
            }
            return post;
        });
        setPosts(newPosts);
    };

    const getVotes = (id) => {
        return posts.filter((post) => post.id == id)[0].votes;
    };

    return (
        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#090909",
                    display: screen == 0 ? '' : 'none'
                }}
            >
                <HomeHeader />
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <PostList
                        posts={posts}
                        setPosts={setPosts}
                        navigation={navigation}
                        voteUtils={{ updateVotes, getVotes }}
                    />
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#090909",
                    display: screen == 1 ? '' : 'none'
                }}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View style={styles.headSection}>
                        <Text style={styles.header}>Welcome PurplePanda3!</Text>
                        <Image source={require("../assets/star.png")} style={{
                            margin: RFValue(10, 926)
                        }}/>
                        <Text style={styles.subheader}>Pick a chat room!</Text>
                    </View>
                    <View>
                        <TouchableHighlight onPress={() => navigation.navigate("Chat", {
                            title: 'Iowa State University'
                        })}
                            style={styles.menuOption}
                            underlayColor={"#000"}>
                            <Text style={styles.menuOptionText}>
                                Iowa State University
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigation.navigate("Chat", {
                            title: 'Ames'
                        })}
                            style={styles.menuOption}
                            underlayColor={"#000"}>
                            <Text style={styles.menuOptionText}>Ames</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigation.navigate("Chat", {
                            title: 'Iowa'
                        })}
                            style={styles.menuOption}
                            underlayColor={"#000"}>
                            <Text style={styles.menuOptionText}>Iowa</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <HomeFooter />
            </View>
            <HomeFooter screen={screen} setScreen={setScreen} />
        </>
        
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
        backgroundColor: "#1D1E21",
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
