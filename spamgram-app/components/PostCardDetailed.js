import { View, Text, TouchableHighlight } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Avatar from "./Avatar";
import VoteContainer from "./VoteContainer";
import CommentSection from "./CommentSection";
import CommentInput from "./CommentInput";
import moment from "moment";

function PostCardDetailed(props) {
    const post = props.props.route.params.post;
    const user = props.props.route.params.user

    const [backPressed, setBackPressed] = useState(false);
    const [sharePressed, setSharePressed] = useState(false);
    const [focused, setFocused] = useState(false);
    const [comments, setComments] = useState([]);

    const [detailedPressed, setDetailedPressed] = useState(
        props.props.route.params.pressed
    );
    const [detailedVotes, setDetailedVotes] = useState(
        props.props.route.params.votes
    );

    const detailedUpvote = () => {
        props.props.route.params.upvote();
        if (detailedPressed == -1) {
            setDetailedVotes(detailedVotes + 1);
            setDetailedPressed(1);
        } else if (detailedPressed == 0) {
            setDetailedVotes(detailedVotes + 2);
            setDetailedPressed(1);
        } else {
            setDetailedVotes(detailedVotes - 1);
            setDetailedPressed(-1);
        }
    };

    const detailedDownvote = () => {
        props.props.route.params.downvote();
        if (detailedPressed == -1) {
            setDetailedVotes(detailedVotes - 1);
            setDetailedPressed(0);
        } else if (detailedPressed == 1) {
            setDetailedVotes(detailedVotes - 2);
            setDetailedPressed(0);
        } else {
            setDetailedVotes(detailedVotes + 1);
            setDetailedPressed(-1);
        }
    };

    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "rgba(48, 49, 51, 0.8)",
                borderRadius: 15,
                marginBottom: 10,
                marginTop: 10,
            }}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#1D1E21",
                    maxHeight: 230,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        marginLeft: 10,
                        marginRight: 10,
                        maxHeight: 55,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            width: "50%",
                        }}
                    >
                        <TouchableHighlight
                            onPressIn={() => setBackPressed(true)}
                            onPressOut={() => setBackPressed(false)}
                            onPress={() => navigation.goBack()}
                            style={{
                                backgroundColor: "#000000",
                                width: 55,
                                height: 55,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                            }}
                            underlayColor={"#454545"}
                        >
                            <AntDesign
                                name="arrowleft"
                                size={36}
                                color={backPressed ? "black" : "white"}
                            />
                        </TouchableHighlight>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            width: "50%",
                            alignItems: "flex-end",
                        }}
                    >
                        <TouchableHighlight
                            onPressIn={() => setSharePressed(true)}
                            onPressOut={() => setSharePressed(false)}
                            onPress={() => console.log("Sharing!")}
                            style={{
                                backgroundColor: "#000000",
                                width: 55,
                                height: 55,
                                borderBottomLeftRadius: 15,
                                borderBottomRightRadius: 15,
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                            }}
                            underlayColor={"#454545"}
                        >
                            <AntDesign
                                name="sharealt"
                                size={36}
                                color={sharePressed ? "black" : "white"}
                                style={{
                                    marginLeft: -5,
                                }}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10,
                    }}
                >
                    <View
                        style={{
                            width: "75%",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                maxHeight: 48,
                            }}
                        >
                            <Avatar
                                height={55}
                                width={55}
                                color={post.authorColor}
                                radius={15}
                                fontSize={32}
                                emoji={post.authorEmoji}
                            />
                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        color: post.authorColor,
                                        overflow: "hidden",
                                        fontSize: RFValue(24, 926),
                                        fontWeight: "500",
                                        marginLeft: 10,
                                    }}
                                >
                                    {post.author}
                                </Text>
                                <Text
                                    style={{
                                        color: "rgba(255, 255, 255, 0.5)",
                                        overflow: "hidden",
                                        fontSize: RFValue(18, 926),
                                        marginLeft: 10,
                                    }}
                                >
                                    {moment(post.timestamp).fromNow()}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                padding: 5,
                                paddingTop: 20,
                                flexWrap: "wrap",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: RFValue(24, 926),
                                    color: "#fff",
                                    width: "100%",
                                }}
                            >
                                {post.text}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "25%",
                            alignItems: "flex-end",
                            paddingLeft: 20,
                        }}
                    >
                        <VoteContainer
                            votes={detailedVotes}
                            upvote={detailedUpvote}
                            downvote={detailedDownvote}
                            pressed={detailedPressed}
                        />
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                }}
            >
                <CommentSection comments={comments} setComments={setComments} />
            </View>
            <CommentInput
                comments={comments}
                setComments={setComments}
                setFocused={setFocused}
                user={user}
            />
        </View>
    );
}

export default PostCardDetailed;
