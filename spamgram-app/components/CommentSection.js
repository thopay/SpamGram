import { useEffect, useRef, useState } from "react";
import { ScrollView, Dimensions, View, SafeAreaView, FlatList } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import Comment from "./Comment";

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
  } = Dimensions.get('window');

function CommentSection({ comments, setComments }) {
	return (
		<SafeAreaView style={{
			flex: 1,
		}}>
			<FlatList
				data={comments}
				renderItem={(comment) => {
					return (
						<Comment key={comment.item.id} data={comment.item} />
					)
				}}
				keyExtractor={comment => comment.id}
				style={{
					paddingLeft: 10,
					paddingRight: 10,
					marginBottom: 75
				}}
				contentContainerStyle={{
					flexGrow: 1,
					marginTop: 10,
				}}
			/>
		</SafeAreaView>
	)
}

export default CommentSection