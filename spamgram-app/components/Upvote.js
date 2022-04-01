import { TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

function Upvote({pressed, setPressed, votes, setVotes}) {

	return (
		<TouchableWithoutFeedback onPress={() => {
			if (pressed == -1) {
				setPressed(1)
				setVotes(votes + 1)
			} else if (pressed == 0) {
				setPressed(1)
				setVotes(votes + 2)
			} else {
				setPressed(-1)
				setVotes(votes - 1)
			}
		}} style={{
			borderRadius: '50%',
		}} >
			<AntDesign name="caretup" size={48} color={pressed == 1 ? "#AAFF83" : "rgba(170, 255, 131, 0.5)" } />
		</TouchableWithoutFeedback>
	)
}

export default Upvote