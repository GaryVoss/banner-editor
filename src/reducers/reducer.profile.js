export default function profile(state = {}, action = {}) {
	switch (action.type) {
		case 'PROFILE_UPDATE':
			return {
				FirstName: action.FName,
				LastName: action.LName,
				Initail: action.Initial,
				Email: action.Email,
			}
		default:
			return state
	}
}