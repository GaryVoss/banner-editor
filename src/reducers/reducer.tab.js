export default function tab(state = 'colour', action) {
	switch (action.type) {
		case 'TAB_COLOUR':
			return state = 'colour'
		case 'TAB_MESSAGE':
			return state = 'message'
		case 'TAB_IMAGE':
			return state = 'image'
		case 'TAB_URL':
			return state = 'url'
		default:
			return state
  }
}