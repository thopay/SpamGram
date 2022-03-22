import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import ChatHeader from '../components/Header/ChatHeader';
import MessageInput from '../components/MessageInput';
import NavigationBar from 'react-native-navbar';
import Chat from '../components/Chat';

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
  } = Dimensions.get('window');

export default function ChatScreen({ navigation }) {
    return (
        <View style={styles.container}>
			<ChatHeader />
			<Chat />
			<MessageInput />
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