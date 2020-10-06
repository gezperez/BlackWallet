import {
	FETCH_CRYPTOS_LOADING,
	FETCH_CRYPTOS_SUCCESS,
	FETCH_CRYPTOS_ERROR,
} from "../actions/crypto";

const initialState = {
	loading: false,
	cryptos: [],
	error: null,
};

const cryptoReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CRYPTOS_LOADING:
			return {
				...state,
				loading: true,
			};
		case FETCH_CRYPTOS_SUCCESS:
			return {
				...state,
				loading: false,
				cryptos: action.payload,
			};
		case FETCH_CRYPTOS_ERROR:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default cryptoReducer;
