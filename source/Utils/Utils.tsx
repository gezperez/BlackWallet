const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type ValidateInputProp = {
	name: string;
	text: string;
	length: number;
};

type ValidateEmailProp = {
	email: string;
};

const validateInput = ({ name, text, length }: ValidateInputProp) => {
	if (text.length < length) {
		return `${name} debe tener un mínimo de ${length} caracteres`;
	}
	return undefined;
};

const validateEmail = ({ email }: ValidateEmailProp) => EMAIL_REGEX.test(email);

export { validateInput, validateEmail };
