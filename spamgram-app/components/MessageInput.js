import { KeyboardAvoidingView, StyleSheet, TextInput, View, TouchableHighlight } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'; 
import { useState } from 'react';

function MessageInput() {
	const [pressed, setPressed] = useState(false)

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container} keyboardVerticalOffset={RFValue(115, 926)}>
			<View style={{
				flex: 1,
				padding: 20,
				flexDirection: 'row'
			}}> 
				<TextInput placeholder='New Message...' style={{
					backgroundColor: '#000',
					padding: 10,
					borderRadius: 5,
					marginRight: 15,
					color: 'white',
					width: '85%',
					height: RFValue(60, 926),
					fontSize: RFValue(18, 926)
				}} placeholderTextColor={'rgba(256, 256, 256, 0.5)'}/>
				<View style={{
					flex: 1,
					alignItems: 'center',
					width: '15%',
					height: RFValue(60, 926),
				}}>
					<TouchableHighlight onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)} onPress={() => console.log('hello')} style={{
						backgroundColor: '#000000',
						borderRadius: '50%',
						justifyContent: 'center',
						alignItems: 'center',
						paddingTop: 3,
						paddingRight: 3,
						height: RFValue(60, 926),
						width: RFValue(60, 926)
					}} underlayColor={"#454545"}>
						<Feather name="send" size={32} color={pressed ? "black" : "white"} />
					</TouchableHighlight>
				</View>
				
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1D1E21',
		position: 'absolute',
		bottom: 0,
		height: RFValue(150, 926),
		width: '100%',
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		zIndex: 3
	}
});

export default MessageInput