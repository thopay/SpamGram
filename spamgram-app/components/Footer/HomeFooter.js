import { KeyboardAvoidingView, StyleSheet, TextInput, View, TouchableWithoutFeedback } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

function HomeFooter() {

	const [focused, setFocused] = useState(0)

	return (
		<View style={styles.container}>
			<View style={{
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<TouchableWithoutFeedback onPress={() => setFocused(0)}>
					<MaterialCommunityIcons name="map-marker-radius" size={40} color={focused == 0 ? "white" : "rgba(255, 255, 255, 0.25)"} style={{
						top: -10,
						marginRight: 30
					}} />
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={() => setFocused(1)}>
					<AntDesign name="message1" size={40} color={focused == 1 ? "white" : "rgba(255, 255, 255, 0.25)"} style={{
						top: -10,
						marginLeft: 30
					}} />
				</TouchableWithoutFeedback>
				
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1D1E21',
		position: 'absolute',
		bottom: 0,
		height: RFValue(105, 926),
		width: '100%',
		zIndex: 3,
		borderColor: '#000',
		borderWidth: 2
	}
});

export default HomeFooter