import { useEffect, useRef, useState } from "react";
import { ScrollView, Dimensions, View, SafeAreaView, FlatList } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import ChatMessage from "./ChatMessage"

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
  } = Dimensions.get('window');

function Chat({ messages, setMessages, focused }) {

	const scrollRef = useRef();

	const messagesList = messages.map(data => {
		return (
			<ChatMessage key={data.id} text={data.text} borderColor={data.borderColor}/>
		)
	})

	return (
		<SafeAreaView style={{
		}}>
			<FlatList
				data={messages}
				renderItem={(message) => {
					return (
						<ChatMessage key={message.item.id} data={message.item} />
					)
				}}
				keyExtractor={message => message.id}
				style={{
					paddingLeft: 15,
					paddingRight: 15,
					marginTop: RFValue(95, 926),
					height: SCREEN_HEIGHT - RFValue(305, 926),
					bottom: focused ? RFValue(375, 926) : 0
				}}
				contentContainerStyle={{
					justifyContent: "flex-end",
					flexGrow: 1
				}}
				ref={scrollRef}
				onContentSizeChange={() => scrollRef.current.scrollToEnd() }
			/>
		</SafeAreaView>
	)
}

export default Chat