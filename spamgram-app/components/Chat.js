import { useEffect, useRef } from "react";
import { ScrollView, Dimensions } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import ChatMessage from "./ChatMessage"

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
  } = Dimensions.get('window');

function Chat() {

	const scrollRef = useRef()

	useEffect(() => {
		scrollRef.current.scrollToEnd({ animate: false })
	})

	return (
		<ScrollView style={{
			flex: 1,
			zIndex: 1,
			position: 'absolute',
			marginBottom: RFValue(150, 926),
			marginTop: RFValue(150, 926),
			bottom: 0,
			width: '100%',
			height: SCREEN_HEIGHT - 2 *  RFValue(150, 926),
			paddingLeft: 15,
			paddingRight: 15,
			overflow: "scroll"
		}} ref={scrollRef}>
			<ChatMessage text={"1"} />
			<ChatMessage text={"2"} />
			<ChatMessage text={"3"} />
			<ChatMessage text={"4"} />
			<ChatMessage text={"5"} />
			<ChatMessage text={"6"} />
			<ChatMessage text={"7"} />
			<ChatMessage text={"8"} />
			<ChatMessage text={"9"} />
			<ChatMessage text={"10"} />
			<ChatMessage text={"11"} />
			<ChatMessage text={"Example stuff..."}/>
		</ScrollView>
	)
}

export default Chat