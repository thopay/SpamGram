import { useEffect, useState } from "react";
import {
    Text,
    View,
    TouchableHighlight,
    Image,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import HomeFooter from "../components/HomeFooter";
import HomeHeader from "../components/HomeHeader";
import PostList from "../components/PostList";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const states = {
    AZ: "Arizona",
    AL: "Alabama",
    AK: "Alaska",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
};

export default function HomeScreen(props) {
    const posts = props.posts;
    const addPost = props.addPost;
    const address = props.address;
    const user = props.user;
    const fetchPosts = props.fetchPosts;
    const loadingData = props.loadingData;
    const loadingStatus = props.loadingStatus;
    const university = props.university;

    const navigation = useNavigation();

    const [screen, setScreen] = useState(0);

    const [allowChat, setAllowChat] = useState(false);

    useEffect(() => {
        if (Object.keys(address).length != 0) {
            setAllowChat(true);
        }
    }, [address]);

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
                    display: screen == 0 ? "" : "none",
                }}
            >
                <HomeHeader user={user} />
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        display: !loadingData,
                    }}
                >
                    <ActivityIndicator size="large" color="#fff" />
                    <Text style={{ color: "#fff" }}>{loadingStatus}</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        display: loadingData,
                    }}
                >
                    <PostList
                        posts={posts}
                        navigation={navigation}
                        voteUtils={{ updateVotes, getVotes }}
                        user={user}
                        fetchPosts={fetchPosts}
                    />
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#090909",
                    display: screen == 1 ? "" : "none",
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
                        <Text style={styles.header}>Hello {user.name}!</Text>
                        <Image
                            source={require("../assets/star.png")}
                            style={{
                                margin: RFValue(10, 926),
                            }}
                        />
                        <Text style={styles.subheader}>Pick a chat room!</Text>
                    </View>
                    <View>
                        <TouchableHighlight
                            onPress={() =>
                                navigation.navigate("Chat", {
                                    title: university,
                                    user,
                                })
                            }
                            style={[
                                styles.menuOption,
                                { borderColor: user.color },
                            ]}
                            underlayColor={"#000"}
                        >
                            <Text style={styles.menuOptionText}>
                                {university}
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() =>
                                navigation.navigate("Chat", {
                                    title: address.city + ", " + address.region,
                                    user,
                                })
                            }
                            style={[
                                styles.menuOption,
                                { borderColor: user.color },
                            ]}
                            underlayColor={"#000"}
                        >
                            <Text style={styles.menuOptionText}>
                                {address.city + ", " + address.region}
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() =>
                                navigation.navigate("Chat", {
                                    title: states[address.region],
                                    user,
                                })
                            }
                            style={[
                                styles.menuOption,
                                { borderColor: user.color },
                            ]}
                            underlayColor={"#000"}
                        >
                            <Text style={styles.menuOptionText}>
                                {states[address.region]}
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <HomeFooter />
            </View>
            <HomeFooter
                screen={screen}
                setScreen={setScreen}
                allowChat={allowChat}
            />
        </>
    );
}

const styles = StyleSheet.create({
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
