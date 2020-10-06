import axios from "axios";

const API_KEY =
	"224c20ad1630e74c7d9e2816bba51ed4652610a39e2642eb6276e59e0f4d69cc";

const API = axios.create({
	baseURL: "https://min-api.cryptocompare.com/",
	timeout: 20000,
});

export { API, API_KEY };
