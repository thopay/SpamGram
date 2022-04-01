import { useState } from 'react';
import { View, Dimensions, Text, TouchableHighlight, Image } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Avatar from '../Avatar';

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
  } = Dimensions.get('window');

function Chat() {

	const [pressed, setPressed] = useState(false)
	const navigation = useNavigation()

	return (
		<View style={{
			backgroundColor: '#1D1E21',
			width: '100%',
			height: RFValue(150, 926),
			position: 'absolute',
			borderBottomLeftRadius: 15,
			borderBottomRightRadius: 15,
			zIndex: 3
		}}>
			<View style={{
				width: '100%',
				position: 'absolute',
				bottom: 0,
				display: 'flex',
				flexDirection: 'row'
			}}>
				<TouchableHighlight onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)} onPress={() => navigation.goBack()} style={{
					backgroundColor: '#000000',
					margin: 14,
					width: 48,
					height: 48,
					borderRadius: 15,
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					bottom: 0,
					zIndex: 2
				}} underlayColor={"#454545"}>
					<AntDesign name="arrowleft" size={36} color={pressed ? "black" : "white" } />
				</TouchableHighlight>
				<View style={{
					display: 'flex',
					bottom: 0,
					width: '100%',
					padding: 14
				}}>
					<View style={{
						flex: 1,
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'center'
					}}>
						<Avatar height={24} width={24} color={'#FCCFFD'} radius={'50%'} fontSize={12} emoji={'🐼'} />
						<Text style={{
							color: '#FCCFFD',
							textAlign: 'center',
							marginBottom: 10,
							fontSize: RFValue(24, 926),
							marginLeft: 10
						}}>PurplePanda3</Text>
					</View>
					<Text style={{
						color: 'white',
						width: '100%',
						textAlign: 'center',
						fontWeight: '700',
						fontSize: RFValue(24, 926),
					}}>Iowa State University</Text>
				</View>
			</View>
		</View>
	)
}

export default Chat