import { View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import ChatHeader from "../components/ChatHeader";
import MessageInput from "../components/MessageInput";
import Chat from "../components/Chat";
import socketIO from "socket.io-client";

export default function ChatScreen(props) {
    const chatRoom = props.route.params;
    const user = props.route.params.user;

    const [pSocket, setSocket] = useState(null);

    const [messages, setMessages] = useState([]);

    const [allowSend, setAllowSend] = useState(true);

    const addMessage = (msg) => {
        setAllowSend(false);
        setMessages((messages) => {
            return [
                ...messages,
                {
                    id: msg.id,
                    text: msg.text,
                    author: msg.author,
                    authorColor: msg.authorColor,
                    authorEmoji: msg.authorEmoji,
                    timestamp: msg.timestamp,
                },
            ];
        });
    };

    useEffect(() => {
        setAllowSend(true);
    }, [messages]);

    useEffect(() => {
        let socket = socketIO("https://spamgram.herokuapp.com/", {
            transports: ["websocket"],
            jsonp: false,
        });
        setSocket(socket);
        socket.connect();

        socket.on("connect", () => {
            socket.emit("joinRoom", {
                username: user.name,
                color: user.color,
                emoji: user.emoji,
                room: chatRoom.title,
            });

            socket.on("message", (msg) => {
                addMessage(msg);
            });
        });

        return () => {
            socket.close();
        };
    }, []);

    const [focused, setFocused] = useState(false);

    return (
        <View style={styles.container}>
            <ChatHeader chatRoom={chatRoom} user={user} />
            <Chat
                messages={messages}
                focused={focused}
            />
            <MessageInput
                setFocused={setFocused}
                socket={pSocket}
                allowSend={allowSend}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
    },
});
