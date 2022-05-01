import { useState } from "react";
import {
    Dimensions,
    SafeAreaView,
    FlatList,
    RefreshControl
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from "./PostCard";

function PostList({ posts, addPost, navigation, voteUtils, user, fetchPosts }) {

    const [refreshing, setRefreshing] = useState(false)

    const _onRefresh = () => {
        setRefreshing(true)
        fetchPosts()
        setRefreshing(false)
    }

    return (
        <SafeAreaView style={{}}>
            <FlatList
                data={posts.sort((a, b) => {
                    return b.timestamp - a.timestamp
                })}
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing} 
                        onRefresh={_onRefresh}
                        tintColor="#fff"/>
                }
                renderItem={(post) => {
                    return (
                        <PostCard
                            key={post.item.id}
                            data={post.item}
                            navigation={navigation}
                            voteUtils={voteUtils}
                            user={user}
                        />
                    );
                }}
                keyExtractor={(post) => post.id}
                style={{
                    paddingLeft: 15,
                    paddingRight: 15,
                    marginTop: RFValue(95, 926),
                    marginBottom: RFValue(65, 926),
                }}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            />
        </SafeAreaView>
    );
}

export default PostList;
