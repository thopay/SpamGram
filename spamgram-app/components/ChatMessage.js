import { View, Text } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"

function ChatMessage(props) {
	return (
		<View style={{
			width: '100%',
			backgroundColor: '#0F0F10',
			minHeight: RFValue(70, 926),
			borderRadius: 15,
			borderColor: '#FDCFCF',
			borderWidth: 1,
			padding: 10,
			marginBottom: 10,
			marginTop: 10
		}}>
			<Text style={{
				color: 'white'
			}}>{props.text ? props.text : 'Hello'}</Text>
		</View>
	)
}

export default ChatMessage