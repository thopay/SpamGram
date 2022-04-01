import { TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

function Downvote({pressed, setPressed, votes, setVotes}) {

	return (
		<TouchableWithoutFeedback onPress={() => {
			if (pressed == -1) {
				setPressed(0)
				setVotes(votes - 1)
			} else if (pressed == 1) {
				setPressed(0)
				setVotes(votes - 2)
			} else {
				setPressed(-1)
				setVotes(votes + 1)
			}
		}} style={{
			borderRadius: '50%',
		}} >
			<AntDesign name="caretdown" size={48} color={pressed == 0 ? "#FF8383" : "rgba(255, 131, 131, 0.5)" } />
		</TouchableWithoutFeedback>
	)
}

export default Downvote