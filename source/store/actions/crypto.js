import { API, API_KEY } from "../../Utils/Request";

const FETCH_CRYPTOS_LOADING = "FETCH_CRYPTOS_LOADING";
const FETCH_CRYPTOS_SUCCESS = "FETCH_CRYPTOS_SUCCESS";
const FETCH_CRYPTOS_ERROR = "FETCH_CRYPTOS_ERROR";

const cryptosLoading = () => {
	return {
		type: FETCH_CRYPTOS_LOADING,
	};
};

const cryptosSuccess = (data) => {
	return {
		type: FETCH_CRYPTOS_SUCCESS,
		payload: data,
	};
};

const cryptosError = (error) => {
	return {
		type: FETCH_CRYPTOS_ERROR,
		payload: error,
	};
};

function fetchCryptos() {
	return async (dispatch) => {
		const url = `data/pricemulti?fsyms=ETH,DASH,LTC,XRP,BNB,BSV,LINK,YFI,TRX&tsyms=BTC,USD,EUR&api_key=${API_KEY}`;

		dispatch(cryptosLoading());
		setTimeout(
			() =>
				API.get(url)
					.then(({ data }) => {
						dispatch(cryptosSuccess(data));
					})
					.catch((error) => {
						dispatch(cryptosError(error));
					}),
			2000
		);
	};
}

export default fetchCryptos;

export { FETCH_CRYPTOS_LOADING, FETCH_CRYPTOS_SUCCESS, FETCH_CRYPTOS_ERROR };
