import React from 'react'
import { View, Text } from 'react-native'

function Avatar(props) {
	return (
		<View style={{
			flex: 1,
			height: props.height ? props.height : 48,
			width: props.width ? props.width : 48,
			maxWidth: props.width ? props.width : 48,
			maxHeight: props.height ? props.height : 48,
			backgroundColor: props.color,
			borderRadius: props.radius,
			alignItems: 'center',
			justifyContent: 'center'
		}}>
			<Text style={{
				fontSize: props.fontSize
			}}>{props.emoji}</Text>
		</View>
	)
}

export default Avatar