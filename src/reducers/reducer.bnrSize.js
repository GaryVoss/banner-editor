export default function bnrSize(state = '120x600', action) {
	switch (action.type) {
		case 'BNR_120X600':
			return state = '120x600'
		case 'BNR_160X600':
			return state = '160x600'
		case 'BNR_300X600':
			return state = '300x600'
		case 'BNR_300X250':
			return state = '300x250'
		case 'BNR_250X250':
			return state = '250x250'
		case 'BNR_200X200':
			return state = '200x200'
		case 'BNR_970X250':
			return state = '970x250'
		case 'BNR_728X90':
			return state = '728x90'
		case 'BNR_468X60':
			return state = '468x60'
		default:
			return state
  }
}