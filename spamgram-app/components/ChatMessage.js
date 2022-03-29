import { View, Text } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import moment from 'moment'

function ChatMessage(props) {
	return (
		<View style={{
			width: '100%',
			backgroundColor: '#0F0F10',
			minHeight: RFValue(80, 926),
			borderRadius: 15,
			borderColor: props.data.authorColor,
			borderWidth: 1,
			padding: 10,
			marginBottom: 10,
			marginTop: 10
		}}>
			<View style={{
				flex: 1,
				flexDirection: 'row'
			}}>
				<View style={{
					width: '50%',
				}}>
					<Text style={{
						color: props.data.authorColor,
						overflow: 'hidden'
					}}>
						{props.data.author}
					</Text>
				</View>
				<View style={{
					width: '50%',
					alignItems: 'flex-end'
				}}>
					<Text style={{
						color: 'rgba(255, 255, 255, 0.5)'
					}}>
						{moment(props.data.timestamp).fromNow()}
					</Text>
				</View>
			</View>
			<Text style={{
				color: '#fff'
			}}>
				{props.data.text}
			</Text>
		</View>
	)
}

export default ChatMessage