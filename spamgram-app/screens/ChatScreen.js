import { View, StyleSheet, Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { useState } from 'react';
import ChatHeader from '../components/Header/ChatHeader';
import MessageInput from '../components/MessageInput';
import NavigationBar from 'react-native-navbar';
import Chat from '../components/Chat';

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
  } = Dimensions.get('window');

export default function ChatScreen({ navigation }) {

	const [messages, setMessages] = useState([
		{
			id: 0,
			text: 'bruh',
			author: 'BlueFox78',
			authorColor: '#CFE1FD',
			authorEmoji: '🦊',
			timestamp: 1648593082395
		},
		{
			id: 1,
			text: 'This math 165 hw is killing me',
			author: 'You',
			authorColor: '#FCCFFD',
			authorEmoji: '🐼',
			timestamp: 1648593082395
		},
	]);

	const [focused, setFocused] = useState(false)

    return (
        <View style={styles.container}>
			<ChatHeader />
			<Chat messages={messages} setMessages={setMessages} focused={focused} />
			<MessageInput messages={messages} setMessages={setMessages} setFocused={setFocused} />
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#262626',
	},
	chatHeader: {
		height: RFValue(428, 926),
		backgroundColor: '#1D1E21'
	}
})