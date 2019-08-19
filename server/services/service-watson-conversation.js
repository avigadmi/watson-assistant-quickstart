const AssistantV1 = require('ibm-watson/assistant/v1');

module.exports = function(app, serviceManager) {
	const iam_url = "https://iam.bluemix.net/identity/token";
	const assistant = new AssistantV1({
		iam_url,
		iam_apikey: process.env.ASSISTANT_IAM_APIKEY,
		username: process.env.ASSISTANT_USERNAME,
		password: process.env.ASSISTANT_PASSWORD,
		url: process.env.ASSISTANT_URL,
		version: '2019-02-28',
		disable_ssl_verification: true // necessary for CPD
	});

	serviceManager.set('watson-conversation', assistant);
};
