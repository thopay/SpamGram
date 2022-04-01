import { useRef } from "react";
import { ScrollView, Dimensions, View, SafeAreaView, FlatList } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import PostCard from "./PostCard";

const {
	width: SCREEN_WIDTH,
	height: SCREEN_HEIGHT
  } = Dimensions.get('window');

function PostList({ posts, setPosts, navigation }) {

	const scrollRef = useRef();

	return (
		<SafeAreaView style={{
		}}>
			<FlatList
				data={posts}
				renderItem={(post) => {
					return (
						<PostCard key={post.item.id} data={post.item} navigation={navigation} />
					)
				}}
				keyExtractor={post => post.id}
				style={{
					paddingLeft: 15,
					paddingRight: 15,
					marginTop: RFValue(95, 926),
					marginBottom: RFValue(65, 926),
				}}
				contentContainerStyle={{
					justifyContent: "flex-end",
					flexGrow: 1,
				}}
				inverted
			/>
		</SafeAreaView>
	)
}

export default PostList