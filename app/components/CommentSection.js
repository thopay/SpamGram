import { SafeAreaView, FlatList } from "react-native";
import Comment from "./Comment";

function CommentSection({ comments }) {
    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <FlatList
                data={comments}
                renderItem={(comment) => {
                    return (
                        <Comment key={comment.item.id} data={comment.item} />
                    );
                }}
                keyExtractor={(comment) => comment.id}
                style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginBottom: 75,
                }}
                contentContainerStyle={{
                    flexGrow: 1,
                    marginTop: 10,
                }}
            />
        </SafeAreaView>
    );
}

export default CommentSection;
