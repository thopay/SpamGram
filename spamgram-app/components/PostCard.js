import { View, Text, TouchableWithoutFeedback } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import moment from "moment";
import Avatar from "./Avatar";
import VoteContainer from "./VoteContainer";
import { useEffect, useState } from "react";
import { LogBox } from "react-native";
import axios from "axios";

LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
]);

function PostCard(props) {
    useEffect(() => {
        setPressed(props.data.rating)
    }, [props.data.rating])

    useEffect(() => {
        setVotes(props.data.votes)
    }, [props.data.votes])

    useEffect(() => {
        setPressed(props.data.rating)
        setVotes(props.data.votes)
    }, [props])

    const [pressed, setPressed] = useState(props.data.rating);
    const [votes, setVotes] = useState(props.voteUtils.getVotes(props.data.id));
    const user = props.user

    const like = () => {
        axios.get(`https://spamgram.herokuapp.com/api/post/likePost?id=${props.data.id}&user=${user.name}`)
    }

    const dislike = () => {
        axios.get(`https://spamgram.herokuapp.com/api/post/dislikePost?id=${props.data.id}&user=${user.name}`)
    }

    const upvote = () => {
        like();
        if (pressed == -1) {
            setVotes(votes + 1);
            setPressed(1);
        } else if (pressed == 0) {
            setVotes(votes + 2);
            setPressed(1);
        } else {
            setVotes(votes - 1);
            setPressed(-1);
        }
    };

    const downvote = () => {
        dislike();
        if (pressed == -1) {
            setVotes(votes - 1);
            setPressed(0);
        } else if (pressed == 1) {
            setVotes(votes - 2);
            setPressed(0);
        } else {
            setVotes(votes + 1);
            setPressed(-1);
        }
    };

    return (
        <TouchableWithoutFeedback
            onPress={() =>
                props.navigation.navigate("Post", {
                    post: props.data,
                    votes,
                    upvote,
                    downvote,
                    pressed,
                    user
                })
            }
        >
            <View
                style={{
                    flex: 1,
                    width: "100%",
                    backgroundColor: "#1D1E21",
                    borderRadius: 15,
                    borderWidth: 1,
                    padding: 15,
                    marginBottom: 10,
                    marginTop: 10,
                    height: 187,
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
                                height={48}
                                width={48}
                                color={props.data.authorColor}
                                radius={15}
                                fontSize={32}
                                emoji={props.data.authorEmoji}
                            />
                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        color: props.data.authorColor,
                                        overflow: "hidden",
                                        fontSize: RFValue(20, 926),
                                        fontWeight: "500",
                                        marginLeft: 10,
                                    }}
                                >
                                    {props.data.author}
                                </Text>
                                <Text
                                    style={{
                                        color: "rgba(255, 255, 255, 0.5)",
                                        overflow: "hidden",
                                        fontSize: RFValue(18, 926),
                                        marginLeft: 10,
                                    }}
                                >
                                    {moment(props.data.timestamp).fromNow()}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                padding: 5,
                                paddingTop: 10,
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
                                {props.data.text}
                            </Text>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "flex-end",
                                    bottom: -8,
                                }}
                            >
                                <Text
                                    style={{
                                        color: "rgba(255, 255, 255, 0.5)",
                                        fontSize: RFValue(18, 926),
                                    }}
                                >
                                    {props.data.comments == 0 ? '0 Comments' : (props.data.comments == 1 ? '1 Comment' : props.data.comments + ' Comments')}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "25%",
                            alignItems: "flex-end",
                        }}
                    >
                        <VoteContainer
                            votes={votes}
                            upvote={upvote}
                            downvote={downvote}
                            pressed={pressed}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default PostCard;
