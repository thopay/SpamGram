import { View, StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useState, useEffect } from "react";
import ChatHeader from "../components/Header/ChatHeader";
import MessageInput from "../components/MessageInput";
import Chat from "../components/Chat";
import socketIO from 'socket.io-client';

export default function ChatScreen(props) {

    const chatRoom = props.route.params
    const user = props.route.params.user

    const [pSocket, setSocket] = useState(null);

    const [messages, setMessages] = useState([]);

    const [allowSend, setAllowSend] = useState(true);

    const addMessage = (msg) => {
        setAllowSend(false)
        setMessages(messages => {return [
            ...messages,
            {
                id: msg.id,
                text: msg.text,
                author: msg.author,
                authorColor: msg.authorColor,
                authorEmoji: msg.authorEmoji,
                timestamp: msg.timestamp,
            },
        ]})
    }

    useEffect(() => {
        setAllowSend(true)
    }, [messages])

    useEffect(() => {
        let socket = socketIO('https://spamgram.herokuapp.com/', {
            transports: ['websocket'],
            jsonp: false
        });
        setSocket(socket)
        console.log("Attempting connect")
        socket.connect()

        socket.on('connect', () => {
            console.log("Connected to chat room!")

            socket.emit('joinRoom', {
                username: user.name,
                color: user.color,
                emoji: user.emoji,
                room: chatRoom.title
            })

            socket.on('message', msg => {
                addMessage(msg)
            })
        })

        return () => {
            socket.close()
            console.log("Closed connection")
        }
    }, [])

    const [focused, setFocused] = useState(false);

    return (
        <View style={styles.container}>
            <ChatHeader chatRoom={chatRoom} user={user} />
            <Chat
                messages={messages}
                setMessages={setMessages}
                focused={focused}
            />
            <MessageInput
                setFocused={setFocused}
                user={user}
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
    chatHeader: {
        height: RFValue(428, 926),
        backgroundColor: "#1D1E21",
    },
});
